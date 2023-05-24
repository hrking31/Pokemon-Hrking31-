const {
  createPokemon,
  PokemonsById,
  allgetPokemons,
  searchgetPokemons,
} = require("../controllers/pokemonsControllers");

const postPokemons = async (req, res) => {
  // const {
  //   name,
  //   description,
  //   platforms,
  //   image,
  //   released,
  //   rating,
  //   genres,
  //   videogameId,
  // } = req.body;
  // try {
  //   const newVideogame = await createVideogame(
  //     name,
  //     description,
  //     platforms,
  //     image,
  //     released,
  //     rating,
  //     genres
  //   );
  //   res.status(201).json(newVideogame);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};

//------>>>//--BUSCA POKEMONS POR NOMBRE--//<<<------//
const getPokemons = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchgetPokemons(name)
      : await allgetPokemons();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//------>>>//--BUSCA POKEMONS POR ID--//<<<------//
const getPokemonsById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const pokemonID = await PokemonsById(id, source);
    res.status(200).json(pokemonID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postPokemons, getPokemons, getPokemonsById };
