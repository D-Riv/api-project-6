const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const popularSchema = new Schema({
  show: {
    name: String
  },
  rating: {
    average: Number
  },
  network: {
    name: String
  }
});

module.exports = mongoose.model("Popular", popularSchema);
