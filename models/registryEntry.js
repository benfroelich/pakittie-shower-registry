var mongoose = require("mongoose");

var registryEntrySchema = new mongoose.Schema({
    item: String,
    imgUrl: String,
    link: String,
    claimed: {type: Boolean, default: false},
    from: String
});

var RegistryEntry = mongoose.model("RegistryEntry", registryEntrySchema);

module.exports = RegistryEntry;