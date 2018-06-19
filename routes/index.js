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
    response.send("editing: " + request.params.id);
});

module.exports = router;