const express = require("express");
const app = express();
// const List = require("./routes/index");

//Define Routes
app.use("/api/list", require("./routes/index"));

// app.use("/list", require("./routes/index"));
// app.use("/", List);

const Port = process.env.Port || 5000;

app.listen(3000, () => console.log("listening on port 3000"));
