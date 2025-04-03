const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");

const Reviews = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Jobs.belongsToMany(Users, { through: Reviews }); // companyId
Users.belongsToMany(Jobs, { through: Reviews }); // userId

module.exports = Reviews;
