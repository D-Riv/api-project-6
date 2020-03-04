const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newShowSchema = new Schema({
  premeired: Date,
  officalSite: String,
  schedule: {
    time: Number,
    days: [
      {
        day: String
      }
    ]
  }
});

module.exports = mongoose.model("NewShows", newShowSchema);
