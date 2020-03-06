const express = require("express");
const app = express();
const parser = require(body - parser);
const List = require("../models/List");

app.use(parser.json());

app.get("/", (req, res) => {
  List.find({}).then(list => {
    res.json(bachelor);
  });
});
