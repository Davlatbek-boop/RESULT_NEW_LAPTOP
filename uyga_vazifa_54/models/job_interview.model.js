const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");
const Company = require("./company.model");

const Job_interview = sequelize.define(
  "job_interview",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    result: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Job_interview.belongsTo(Users);
Users.hasMany(Job_interview);

Job_interview.belongsTo(Jobs);
Jobs.hasMany(Job_interview);

Job_interview.belongsTo(Company);
Company.hasMany(Job_interview);

module.exports = Job_interview;
