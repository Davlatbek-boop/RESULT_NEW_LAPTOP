const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Company = require("./company.model");
const Country = require("./countries.model");
const Category = require("./category.model");

const Jobs = sequelize.define(
  "job",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(30),
    },
    description: {
      type: DataTypes.TEXT,
    },
    salary: {
      type: DataTypes.BIGINT,
    },
    number_of_vacancies: {
      type: DataTypes.SMALLINT,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Jobs.belongsTo(Company);
Company.hasMany(Jobs);

Jobs.belongsTo(Country);
Country.hasMany(Jobs);

Jobs.belongsTo(Category);
Category.hasMany(Jobs);

module.exports = Jobs;
