const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  show: {
    id: Number,
    url: String,
    name: String,
    language: String,
    genres: [
      {
        genreOne: String,
        genreTwo: String
      }
    ]
  }
});
module.exports = mongoose.model("list", listSchema);
