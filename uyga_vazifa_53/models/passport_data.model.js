const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const PassportData = sequelize.define("users", 
    {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  seria: {
    type: DataTypes.STRING(10),
  },
  given_date: {
    type: DataTypes.DATE,
  },
  expiration_date: {
    type: DataTypes.DATE,
  },
  born_date: {
    type: DataTypes.DATE,
  },
  notionality: {
    type: DataTypes.STRING(100),
  },
  born_country: {
    type: DataTypes.STRING(100),
  },
  born_place: {
    type: DataTypes.STRING(100),
  },
  given_by_whom: {
    type: DataTypes.STRING(100),
  },
  citizenship: {
    type: DataTypes.STRING(100),
  },
  gender: {
    type: DataTypes.STRING(100),
  },
},
{
    freezeTableName: true,
    // timestamps:false
}

);

module.exports = PassportData;
