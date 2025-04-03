const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Requirement = require("./requirements.model");

const Job_requirement = sequelize.define(
  "job_requirement",
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

Jobs.belongsToMany(Requirement, { through: Job_requirement });
Requirement.belongsToMany(Jobs, { through: Job_requirement });

module.exports = Job_requirement;
