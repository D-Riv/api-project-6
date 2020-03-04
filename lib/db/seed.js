const List = require("../models/List");
const NewShows = require("../models/NewShows");
const Popular = require("../models/Popular");
const data = require("./data.json");

List.deleteMany({}).then(() => {
  List.create(list).then(list => {
    console.log(list);
    process.exit();
  });
});
