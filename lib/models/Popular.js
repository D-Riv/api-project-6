const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const popularSchema = new Schema({
  show: {
    name: String
  },
  rating: {
    avaerage: Number
  },
  network: {
    name: String
  }
});
module.exports = mongoose.model("Popular", popularSchema);
