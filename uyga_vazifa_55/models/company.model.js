const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Country = require("./countries.model");

const Company = sequelize.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
    },
    email: {
      type: DataTypes.STRING(30),
    },
    phone: {
      type: DataTypes.STRING(15),
    },
    description: {
      type: DataTypes.TEXT,
    },
    web_site: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Company.belongsTo(Country);
Country.hasMany(Company);

module.exports = Company;
