var express = require("express");
var router = express.Router();
var RegistryEntry = require("../models/registryEntry");

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
       console.log("passing to template: ");
       console.log(entries);
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
    RegistryEntry.findByIdAndUpdate(request.params.id, request.params.entry, function(error) {
        console.log(error);
        response.redirect("/registry");
    });
});

module.exports = router;