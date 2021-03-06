const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/api";
}

mongoose.connect(mongoURI, { useNewUrlParser: true });

// mongoose.connect("mongodb://localhost/newShows", { useNewUrlParser: true });
module.exports = mongoose;
