const fs = require("fs");
const fetch = require("node-fetch");
const url = "http://api.tvmaze.com/shows";
// const headers = {
//   "Content-Type": "application/json",
//   "x-app-id": "1530e13f",
//   "x-app-key": "deda38dfd63f6b63a2a5349aa56ecdf7",
//   "x-remote-user-id": 0
// };

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
