const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Country = sequelize.define(
  "country",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
    },
    code: {
      type: DataTypes.STRING(30),
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

module.exports = Country;
