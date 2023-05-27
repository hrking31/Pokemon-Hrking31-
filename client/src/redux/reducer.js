import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_POKEMON_DETAIL,
  NEXT,
  PREV,
  SET_LOADING,
  SET_ARRAY,
} from "./types";

const initialState = {
  originPokemons: [],
  pokemons: [],
  detailPokemon: [],
  numPage: 1,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        originPokemons: action.payload,
        pokemons: action.payload,
      };

    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detailPokemon: action.payload,
      };

    case NEXT:
      return { ...state, numPage: state.numPage + 1 };

    case PREV:
      return { ...state, numPage: state.numPage - 1 };

    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case SET_ARRAY:
      return {
        ...state,
        detailPokemon: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
