const express = require("express");
const app = express;
const List = require("./models/List");

app.use(require("./routes/index"));

app.listen(3000, () => console.log("listening on port 3000"));
