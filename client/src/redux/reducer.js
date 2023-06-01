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

const initialState = {
  originPokemons: [],
  pokemons: [],
  detailPokemon: [],
  pokemonsTypes: [],
  postPokemon: [],
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
        numPage: 1,
      };
    //------>>>//--BUSCA POKEMONS POR ID--//<<<------//
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detailPokemon: action.payload,
      };
    //------>>>//--BUSCA POKEMONS POR TIPOS--//<<<------//
    case GET_TYPES:
      //   if (state.pokemonsTypes.length === 0) {
      return {
        ...state,
        pokemonsTypes: action.payload,
      };
    //   } else {
    //     return null;
    //   }

    //------>>>//--CREA UN NUEVO POKEMONS--//<<<------//
    case POST_POKEMON:
      return {
        ...state,
        postPokemons: action.payload,
      };

    //------>>>//--NUEVA PAGINA--//<<<------//
    case NEXT:
      return { ...state, numPage: state.numPage + 1 };

    //------>>>//--BPAGINA ANTERIOR--//<<<------//
    case PREV:
      return { ...state, numPage: state.numPage - 1 };

    //------>>>//--REINICIA LOADING--//<<<------//
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    //------>>>//--DEJA EN 0 ESTADO GLOBAL DETAILPOKEMON--//<<<------//
    case SET_ARRAY:
      return {
        ...state,
        detailPokemon: action.payload,
      };
    //------>>>//--ORDENA POKEMONS POR NOMBRE--//<<<------//
    case ORDER_NAME:
      const newName =
        action.payload === "asc"
          ? [...state.originPokemons].sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
          : [...state.originPokemons].sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            });
      return { ...state, pokemons: newName };

    //------>>>//--ORDENA POKEMONS POR TYPES--//<<<------//
    case ORDER_TYPES:
      const newTypes = [...state.originPokemons].filter((tipos) =>
        tipos.types.includes(action.payload)
      );
      return { ...state, pokemons: newTypes };

    //------>>>//--ORDENA POKEMONS POR ATAQUE--//<<<------//
    case ORDER_ATTACK:
      const newAttack =
        action.payload === "asc"
          ? [...state.originPokemons].sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : [...state.originPokemons].sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: newAttack,
      };

    //------>>>//--ORDENA POKEMONS POR API DB--//<<<------//
    case ORDER_CREATED:
      const newCreated =
        action.payload === "true"
          ? [...state.originPokemons].filter(
              (creado) => creado.created === true
            )
          : [...state.originPokemons].filter(
              (creado) => creado.created === action.payload
            );
      return { ...state, pokemons: newCreated };

    //------>>>//--REINICIA LOS FILTROS--//<<<------//
    case RESET:
      return { ...state, pokemons: state.originPokemons };

    default:
      return { ...state };
  }
};

export default rootReducer;
