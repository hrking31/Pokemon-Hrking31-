const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      attack: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      defense: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      speed: {
        type: DataTypes.NUMERIC,
        allowNull: true,
      },
      height: {
        type: DataTypes.NUMERIC,
        allowNull: true,
      },
      weight: {
        type: DataTypes.NUMERIC,
        allowNull: true,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: "true",
      },
    },
    {
      timestamps: false,
    }
  );
};
