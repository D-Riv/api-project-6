const List = require("../models/List");
// const NewShows = require("../models/NewShows");
// const Popular = require("../models/Popular");
const data = require("./data.json");

const showListData = data.map(params => {
  const showList = {
    show: {
      id: params.id,
      url: params.url,
      name: params.name,
      language: params.language,
      new: params.new,
      genres: [
        {
          genreOne: params.genreOne,
          genreTwo: params.genreTwo
        }
      ],
      premiered: params.premiered,
      rating: params.rating,
      network: params.network,
      image: params.image
    }
  };
  return showList;
});
// console.log(showData);

List.remove({}).then(() => {
  List.create(showListData)
    .then(showList => {
      console.log(showList);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
