const express = require("express");
const app = express();
// const parser = require("body-parser");
const List = require("../models/List");
const { validationResult } = require("express-validator/check");

// app.use(parser.json());

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
  create: (req, res) => {
    //validation added for user submission
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    List.create(req.body).then(list => {
      res.json(list);
    });
  }
};
