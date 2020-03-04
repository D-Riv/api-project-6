const List = require("../models/List");
const NewShows = require("../models/NewShows");
const Popular = require("../models/Popular");
const data = require("./data.json");

// const countryData = data.map(item => {
//   const country = {
//     name = item.name,
//     capital = item.capital,
//     region = item.region,
//     population = item.population
//   };
//   return country;
// });
// console.log(countryData);

const showData = data.map(params => {
  const showList = {
    show = {
      id = params.id,
      url = params.url,
      name = params.name,
      language = params.language,
      genres = [
        {
          genreOne = params.genreOne,
          genreTwo = params.genreTwo
        }
      ]
    }
  };
  return showList;
});
console.log(showData);

// List.deleteMany({}).then(() => {
//   List.create(data).then(list => {
//     console.log(list);
//     process.exit();
//   });
// });
