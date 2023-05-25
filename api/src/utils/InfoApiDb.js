const IdApi = (data) => {
  return {
    id: data.id,
    name: data.name,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height / 10,
    weight: data.weight / 10,
    types: data.types.map((element) => {
      return { name: element.type.name };
    }),
    image: data.sprites.other.home.front_default,
  };
};

const AllApi = (results) => {
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
};

const cleanArrayDb = (arr) =>
  arr.map((Elem) => {
    return {
      id: Elem.id,
      name: Elem.name,
      life: Elem.life,
      image: Elem.image,
      attack: Elem.attack,
      defense: Elem.defense,
      speed: Elem.speed,
      height: Elem.height,
      weight: Elem.weight,
      types: Elem.types?.map((ch) => ch.name),
      created: Elem.created,
    };
  });

const infoDb = (game) => {
  const info = game.dataValues;
  return {
    id: info.id,
    name: info.name,
    life: info.life,
    image: info.image,
    attack: info.attack,
    defense: info.defense,
    speed: info.speed,
    height: info.height,
    weight: info.weight,
    types: info.types?.map((ch) => ch.name),
    created: info.created,
  };
};

module.exports = {
  IdApi,
  AllApi,
  cleanArrayDb,
  infoDb,
};

// const databasePokemons = cleanArrayDb(
//   await Pokemon.findAll({
//     where: {
//       name: name,
//     },
//     include: {
//       model: Type, // Corrección: Especificar el modelo Type
//     },
//   })
// );

// let apiPokemons = [];

// try {
//   const apiPokemonRaw = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${name}`
//   );
//   apiPokemons = [IdApi(apiPokemonRaw.data)];
// } catch (error) {
//   console.error("Error al obtener datos de la API:", error);
// }

// return [...databasePokemons, ...apiPokemons];
