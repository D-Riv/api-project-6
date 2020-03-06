const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newShows", { useNewUrlParser: true });
module.exports = mongoose;
