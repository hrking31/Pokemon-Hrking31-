import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_POKEMON_DETAIL,
  NEXT,
  PREV,
} from "./types";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemons");
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemon });
  };
};

export const getPokemon = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
  };
};

export const getPokemonById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
  };
};

export const nextPage = () => {
  return {
    type: NEXT,
  };
};
export const prevPage = () => {
  return {
    type: PREV,
  };
};
