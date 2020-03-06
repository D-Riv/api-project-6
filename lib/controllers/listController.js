const express = require("express");
const app = express();
const parser = require("body-parser");
const List = require("../models/List");

app.use(parser.json());

app.get("/:premiered", (req, res) => {
  List.find({ premiered: req.params.premiered_gt }).then(list => {
    res.json(list);
  });
});