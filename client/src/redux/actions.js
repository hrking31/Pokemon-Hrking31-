import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  POST_POKEMON,
  NEXT,
  PREV,
  SET_LOADING,
  SET_ARRAY,
  RESET,
  ORDER_TYPES,
  ORDER_CREATED,
  ORDER_NAME,
  ORDER_ATTACK,
} from "./types";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemons");
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemon });
    dispatch({ type: SET_LOADING });
  };
};

export const getPokemon = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
    dispatch({ type: SET_LOADING });
  };
};

export const getPokemonById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
    dispatch({ type: SET_LOADING });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/types");
    const pokemon = apiData.data;
    dispatch({ type: GET_TYPES, payload: pokemon });
  };
};

export const postPokemon = (pokemonData) => {
  return async (dispatch) => {
    const apiData = await axios.post(
      "http://localhost:3001/pokemons",
      pokemonData
    );
    const pokemon = apiData.data;
    dispatch({ type: POST_POKEMON, apidata: pokemon });
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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setArray = () => {
  return {
    type: SET_ARRAY,
    payload: [],
  };
};

export const orderName = (name) => {
  return {
    type: ORDER_NAME,
    payload: name,
  };
};

export const orderTypes = (types) => {
  return {
    type: ORDER_TYPES,
    payload: types,
  };
};

export const orderAttack = (attack) => {
  return {
    type: ORDER_ATTACK,
    payload: attack,
  };
};

export const orderCreated = (created) => {
  return {
    type: ORDER_CREATED,
    payload: created,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
