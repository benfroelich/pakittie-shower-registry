var express = require("express");
var router = express.Router();
var RegistryEntry = require("../models/registryEntry");

// landing page
router.get("/", function(request, response) {
    response.send("future landing page"); 
});

// index all items
router.get("/registry", function(request, response) {
   response.send("future registry list"); 
});

// edit: check it off and add name
router.get("/registry/:id/edit", function(request, response) {
    response.send("editing: " + request.params.id);
});
