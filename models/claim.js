var mongoose = require("mongoose");

var claimSchema = new mongoose.Schema({
    from: String
});

mongoose.model("Claim", claimSchema);

module.exports = claimSchema;