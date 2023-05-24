const { Router } = require("express");
const {
  postPokemons,
  getPokemons,
  getPokemonsById,
} = require("../handlers/pokemonsHandlers");

const pokemonsRouter = Router();

pokemonsRouter
  .post("/", postPokemons)
  .get("/", getPokemons)
  .get("/:id", getPokemonsById);

module.exports = pokemonsRouter;
