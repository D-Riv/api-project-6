const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// const popularSchema = new Schema({
//   show: {
//     name: String
//   },
//   rating: {
//     avaerage: Number
//   },
//   network: {
//     name: String
//   }
// });
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

const listSchema = new Schema({
  show: {
    id: Number,
    url: String,
    name: String,
    language: String,
    new: [newShowSchema],
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
