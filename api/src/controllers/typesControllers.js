const axios = require("axios");
const { Type } = require("../db");

const createType = async () => {
  const typesApi = await axios.get(`https://pokeapi.co/api/v2/type`);
  const types = typesApi.data.results.map((type) => type.name);
  types.forEach(async (typeName) => {
    await Type.findOrCreate({
      where: { name: typeName },
    });
  });
  const allTypes = await Type.findAll();
  return allTypes;
};

module.exports = { createType };
