const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");

const Application = sequelize.define(
  "application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Jobs.belongsToMany(Users, { through: Application });
Users.belongsToMany(Jobs, { through: Application });

module.exports = Application;
