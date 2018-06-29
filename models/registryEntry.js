var mongoose = require("mongoose");
var claimSchema = require("./claim");

var registryEntrySchema = new mongoose.Schema({
    item: String,
    imgUrl: String,
    link: String,
    quantity: {type: Number, default: 1},
    claims: [claimSchema]
});

var RegistryEntry = mongoose.model("RegistryEntry", registryEntrySchema);

module.exports = RegistryEntry;