const { createType } = require("../controllers/typesControllers");

//------>>>//--BUSCA TYPES Y LOS ALMACENA EN DB--//<<<------//
const getTypes = async (req, res) => {
  try {
    const newType = await createType();
    res.status(201).json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { getTypes };
