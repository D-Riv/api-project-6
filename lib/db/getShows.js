const fs = require("fs");
const fetch = require("node-fetch");
const url = "http://api.tvmaze.com/shows";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let newShows = JSON.stringify(res);
    fs.writeFile("./data.json", newShows, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
