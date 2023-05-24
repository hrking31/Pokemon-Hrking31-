const axios = require("axios");
const { Pokemon, Type } = require("../db");
// const { cleanArrayDb, cleanArrayApi } = require("../utils/cleanArrayApi");
// const { infoDb, infoApi } = require("../utils/InfoApiDb");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

const createPokemon = async (
  name,
  description,
  platforms,
  image,
  released,
  rating,
  genres,
  videogameId
) => {
  //   const newVideogame = await Videogame.create({
  //     name,
  //     description,
  //     platforms,
  //     image,
  //     released,
  //     rating,
  //     genres,
  //   });
  //   for (const genreName of genres) {
  //     const genre = await Genre.findOne({ where: { name: genreName } });
  //     if (genre) {
  //       await newVideogame.addGenre(genre);
  //     }
  //   }
  //   const populatedVideogame = await Videogame.findByPk(newVideogame.id, {
  //     include: Genre,
  //   });
  //   return populatedVideogame;
};

//------>>>//--BUSCA VIDEOGAME POR ID--//<<<------//
const PokemonsById = async (id, source) => {
  if (source === "db") {
    const pokemonDb = await Pokemon.findByPk(id);
    return infoDb(pokemonDb);
  } else {
    const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      id: results.data.id,
      name: results.data.name,
      hp: results.data.stats[0].base_stat,
      attack: results.data.stats[1].base_stat,
      defense: results.data.stats[2].base_stat,
      speed: results.data.stats[5].base_stat,
      height: results.data.height / 10,
      weight: results.data.weight / 10,
      types: results.data.types.map((element) => {
        return { name: element.type.name };
      }),
      image: results.data.sprites.other.home.front_default,
    };
  }
};

//------>>>//--BUSCA POKEMON POR NOMBRE--//<<<------//
const allgetPokemons = async () => {
  const databasePokemon = await Pokemon.findAll();
  const apiPokemonRaw = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`)
  ).data.results;
  const promises = apiPokemonRaw.map((data) => axios.get(data.url));
  const dataPokemonsApi = await Promise.all(
    promises.map(async (data) => {
      const results = await data;
      return {
        id: results.data.id,
        name: results.data.name,
        hp: results.data.stats[0].base_stat,
        attack: results.data.stats[1].base_stat,
        defense: results.data.stats[2].base_stat,
        speed: results.data.stats[5].base_stat,
        height: results.data.height / 10,
        weight: results.data.weight / 10,
        types: results.data.types.map((element) => {
          return { name: element.type.name };
        }),
        image: results.data.sprites.other.home.front_default,
      };
    })
  );
  return [...databasePokemon, ...dataPokemonsApi];
};

const searchgetPokemons = async (name) => {
  //   const databaseVideogames = cleanArrayDb(
  //     await Videogame.findAll({
  //       where: {
  //         name: { [Op.iLike]: "%" + name + "%" },
  //       },
  //       include: Genre,
  //     })
  //   );
  //   const apiVideogamesRaw = (
  //     await axios.get(
  //       `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
  //     )
  //   ).data.results;
  //   const apiVideogames = cleanArrayApi(apiVideogamesRaw);
  //   return [...databaseVideogames, ...apiVideogames];
};

module.exports = {
  createPokemon,
  PokemonsById,
  allgetPokemons,
  searchgetPokemons,
};
