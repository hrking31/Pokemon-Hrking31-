const axios = require("axios");
const { Pokemon, Type } = require("../db");

const createType = async () => {
  // const genresApi = await axios.get(
  //   `https://api.rawg.io/api/genres?key=${API_KEY}`
  // );
  // const genres = genresApi.data.results.map((genre) => ({
  //   name: genre.name,
  // }));
  // genres.forEach(async (genre) => {
  //   await Genre.findOrCreate({
  //     where: { name: genre.name },
  //   });
  // });
  // const allGenres = await Genre.findAll();
  // return allGenres;
};

module.exports = { createType };
