const List = require("../models/List");
// const NewShows = require("../models/NewShows");
// const Popular = require("../models/Popular");
const data = require("./data.json");

const showData = data.map(params => {
  const showList = {
    show: {
      id: params.id,
      url: params.url,
      name: params.name,
      language: params.language,
      genres: [
        {
          genreOne: params.genreOne,
          genreTwo: params.genreTwo
        }
      ]
    }
  };
  return showList;
});
// console.log(showData);

List.remove({}).then(() => {
  List.create(showData)
    .then(showList => {
      console.log(showList);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
