const Popular = require("../models/PopularShows");
const data = require("./data.json");

const popularData = data.map(params => {
  const popularList = {
    show: {
      name: params.name,
      rating: params.rating,
      network: params.network
    }
  };
  return popularList;
});

Popular.remove({}).then(() => {
  Popular.create(popularData)
    .then(popList => {
      console.log(popList);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
