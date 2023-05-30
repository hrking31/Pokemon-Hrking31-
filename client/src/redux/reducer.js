import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_POKEMON_DETAIL,
  GET_TYPES,
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

const initialState = {
  originPokemons: [],
  pokemons: [],
  detailPokemon: [],
  pokemonsTypes: [],
  numPage: 1,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //------>>>//--BUSCA TODOS LOS POKEMONS--//<<<------//
    case GET_POKEMONS:
      return {
        ...state,
        originPokemons: action.payload,
        pokemons: action.payload,
      };

    //------>>>//--BUSCA POKEMONS POR NOMBRE--//<<<------//
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    //------>>>//--BUSCA POKEMONS POR ID--//<<<------//
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detailPokemon: action.payload,
      };

    case GET_TYPES:
      if (state.pokemonsTypes.length === 0) {
        return {
          ...state,
          pokemonsTypes: action.payload,
        };
      } else {
        return null;
      }

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
    //------>>>//--ORDENA POKEMONS POR NOMBRE--//<<<------//
    case ORDER_NAME:
      const newName =
        action.payload === "asc"
          ? [...state.pokemons].sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
          : [...state.pokemons].sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            });
      return { ...state, pokemons: newName };

    //------>>>//--ORDENA POKEMONS POR TYPES--//<<<------//
    case ORDER_TYPES:
      const newTypes = [...state.pokemons].filter((tipos) =>
        tipos.types.includes(action.payload)
      );
      return { ...state, pokemons: newTypes };

    //------>>>//--REINICIA LOS FILTROS--//<<<------//
    case RESET:
      return { ...state, pokemons: state.originPokemons };

    default:
      return { ...state };
  }
};

export default rootReducer;
