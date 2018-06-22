var express = require("express");
var router = express.Router();
var RegistryEntry = require("../models/registryEntry");
var emailTransport = require("../email/email");

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

// edit: check it off and add name
router.get("/registry/:id/edit", function(request, response) {
    RegistryEntry.findById(request.params.id, function(err, entry) {
        if(err) console.log(err);
        console.log("rendering the edit page for: ");
        console.log(entry);
        response.render("registry/edit", {entry: entry});
    });
});

router.put("/registry/:id", function(request, response) {
    // RegistryEntry model stores claimed status as a boolean, 
    // but the checkbox returns a string
    request.body.entry.claimed = request.body.entryClaimedString === "true";
    RegistryEntry.findByIdAndUpdate(request.params.id, request.body.entry, 
        function(error) {
        if(error) console.log(error);
        // retrieve the updated document to send an email
        RegistryEntry.findById(request.params.id, function(error, entry) {
            if(error) console.log(error);
            // build the path to the edit route robustly for the email link
            if(request.body.entry.claimed)
                sendEmail(request.body.emailAddress, entry, 
                    request.get("host") + request.baseUrl + request.path + "/edit");
            response.redirect("/registry");
        });
    });
});

function sendEmail(emailRecipient, entry, url) {
    // TODO: create the email body in an ejs template?
    // TODO: seperate contact info from source code
    var emailMessage = 
    "Hi " + entry.from + "!\n" + 
    "Thanks for registering for \'" + entry.item + "\'\n" + 
    "Change or view at " + url + "\n" +
    "Shipping address: 890 Coronado Circle Santa Paula CA 93060";
    var mail = {
        from: "pakittie <littlepakittie@gmail.com>",
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