const mongoose = require("../db/connection");
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
    ],
    premiered: Date,
    rating: {
      average: Number
    },
    network: {
      name: String
    },
    image: {
      medium: String,
      original: String
    }
  }
});
module.exports = mongoose.model("List", listSchema);
