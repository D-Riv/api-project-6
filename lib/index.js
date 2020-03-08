const express = require("express");
const app = express();
const List = require("./routes/index");

app.use("/list", require("./routes/index"));
app.use("/", List);
app.listen(3000, () => console.log("listening on port 3000"));
