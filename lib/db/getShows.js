const fs = require("fs");
const fetch = require("node-fetch");
const url = "http://api.tvmaze.com/shows";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let restaurants = JSON.stringify(res);
    fs.writeFile("./data.json", restaurants, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
