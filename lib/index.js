const express = require("express");
const app = express();
const parser = require("body-parser");

// const List = require("./routes/index");

//Init Middleware
// app.use(express.json({ extended: false }));

//Define Routes
app.use(parser.json());

app.use("/", require("./routes/listRoute"));

// app.use("/list", require("./routes/index"));
// app.use("/", List);

// const Port = process.env.Port || 5000;

app.listen(3000, () => console.log("listening on port 3000"));
// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });
