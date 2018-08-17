var express = require("express");
var router = express.Router();
var RegistryEntry = require("../models/registryEntry");
var emailTransport = require("../email/email");

// include flash messages in template header
router.use(function(request, response, next) {
   response.locals.flash = request.flash('info');
   next();
});

//////////// index routes
// landing page
router.get("/", function(request, response) {
    response.render("splash"); 
});

//////////// registry routes
// index all items
router.get("/registry", function(request, response) {
    RegistryEntry.find({}, function(err, entries) {
        if(err) console.log(err);
        response.render("registry/index", {entries: entries}); 
   });
});

// show + submit to claim
router.get("/registry/:id/edit", function(request, response) {
    RegistryEntry.findById(request.params.id, function(err, entry) {
        if(err) console.log(err);
        var available = entry.claims.length < entry.quantity;
        console.log("rendering the edit page for: ");
        console.log(entry);
        response.render("registry/edit", {
            entry: entry, 
            available: available
        });
    });
});

router.put("/registry/:id", function(request, response) {
    RegistryEntry.findById(request.params.id, function(error, entry) {
        if(error) console.log(error);
        if(entry.claims.length >= entry.quantity) {
            request.flash("info", "Sorry, item is no longer available");
            response.redirect("/registry/" + request.params.id + "/edit");
        } else {
            entry.claims.push({from: request.body.entry.from});
            entry.save(function(error, entry) {
                if(error) {
                    console.log(error);
                    request.flash("info", "Registration failed, please contact Ben");
                }
                else {
                    var newEntryId = entry.claims[entry.claims.length - 1]._id,
                        urlPrefix = request.get("host") + request.baseUrl + request.path,
                        showUrl = urlPrefix + "/edit",
                        deleteUrl = urlPrefix + "/" + newEntryId;
                    sendEmail(request.body.emailAddress, entry,  showUrl, deleteUrl);
                    request.flash("info", "Thank you for registering! Confirmation email sent.");
                }
                response.redirect("/registry");
            });
        }
    });
});

router.get("/registry/:itemId/:claimId", function (request, response) {
    RegistryEntry.findById(request.params.itemId, function(error, entry) {
        if(error) console.log(error);
        else {
            entry.claims = entry.claims.filter(function(claim) {
                return claim._id != request.params.claimId;
            });
            entry.save(function(error) {
                if(error) console.log(error);
                console.log("set up flash message");
                request.flash("info", "Successfully removed your registration" + 
                    " for this item");
                response.redirect("/registry/" + request.params.itemId + "/edit");
            });
        }
    });
});

function sendEmail(emailRecipient, entry, showUrl, deleteUrl) {
    // TODO: create the email body in an ejs template?
    var emailMessage = 
    "Hi " + entry.claims[entry.claims.length - 1].from + 
    ", thanks for registering for " + entry.item + 
    ". View at " + showUrl + ", and un-register at " + deleteUrl + 
    ". Shipping address: " + process.env.REGISTRY_SHIPPING_ADDRESS;
    
    var mail = {
        from: "pakittie <" + process.env.EMAIL_USERNAME + "@gmail.com>",
        to: emailRecipient,
        subject: "Thanks for getting \'" + entry.item + "\'",
        text: emailMessage,
        html: emailMessage
    };

    emailTransport.sendMail(mail, function(error, response){
        if(error) {
            console.log(error);
        } else {
            console.log("Message sent");
        }
        emailTransport.close();
    });
}
module.exports = router;