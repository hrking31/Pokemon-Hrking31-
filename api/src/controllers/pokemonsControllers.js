const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { IdApi, AllApi, cleanArrayDb, infoDb } = require("../utils/InfoApiDb");
const { Op } = require("sequelize");

//------>>>//--CREA POKEMON en DB--//<<<------//
const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const newPokemon = await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
  });
  for (const typeName of types) {
    const type = await Type.findOne({ where: { name: typeName } });
    if (type) {
      await newPokemon.addType(type);
    }
  }
  const pokemonNew = await Pokemon.findByPk(newPokemon.id, {
    include: Type,
  });
  return pokemonNew;
};

//------>>>//--BUSCA POKEMON POR NOMBRE--//<<<------//
const allgetPokemons = async () => {
  const databasePokemon = cleanArrayDb(
    await Pokemon.findAll({ include: Type })
  );
  const apiPokemonRaw = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60`)
  ).data.results;
  const promises = apiPokemonRaw.map((data) => axios.get(data.url));
  const dataPokemonsApi = await Promise.all(
    promises.map(async (data) => {
      const results = await data;
      return AllApi(results);
    })
  );
  return [...databasePokemon, ...dataPokemonsApi];
};

const searchgetPokemons = async (name) => {
  const databasePokemons = cleanArrayDb(
    await Pokemon.findAll({
      where: {
        name: { [Op.iLike]: "%" + name + "%" },
      },
      include: {
        model: Type,
      },
    })
  );

  if (databasePokemons.length > 0) {
    return [...databasePokemons];
  } else {
    const apiPokemonRaw = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    const apiPokemons = [IdApi(apiPokemonRaw.data)];
    return [...apiPokemons];
  }
};

//------>>>//--BUSCA POKEMON POR ID--//<<<------//
const PokemonsById = async (id, source) => {
  if (source === "db") {
    const pokemonDb = await Pokemon.findByPk(id, { include: Type });
    return infoDb(pokemonDb);
  } else {
    const pokemonApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return IdApi(pokemonApi.data);
  }
};

module.exports = {
  createPokemon,
  PokemonsById,
  allgetPokemons,
  searchgetPokemons,
};
