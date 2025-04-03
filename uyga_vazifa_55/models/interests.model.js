const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");

const Interests = sequelize.define(
  "interests",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Jobs.belongsToMany(Users, { through: Interests }); // companyId
Users.belongsToMany(Jobs, { through: Interests }); // userId

module.exports = Interests;
