const express = require("express");
const app = express();
// const parser = require("body-parser");
const List = require("../models/List");
const { validationResult } = require("express-validator/check");
const cors = require("cors");

// app.use(parser.json());

app.use(cors);
// app.get("/:premiered", (req, res) => {
//   List.find({ premiered: req.params.premiered_gt }).then(list => {
//     res.json(list);
//   });
// });
module.exports = {
  index: (req, res) => {
    List.find().then(list => {
      res.json(list);
    });
  },
  showRating: (req, res) => {
    List.find({ "show.rating.average": req.params.rating }).then(list => {
      res.json(list);
    });
  },
  showNetwork: (req, res) => {
    List.find({ "show.network.name": req.params.network }).then(list => {
      res.json(list);
    });
  },
  showOne: (req, res) => {
    List.findOne({ "show.name": req.params.show }).then(list => {
      res.json(list);
    });
  },
  create: (req, res) => {
    //validation added for user submission
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    List.create(req.body).then(list => {
      res.json(list);
    });
  }
};
