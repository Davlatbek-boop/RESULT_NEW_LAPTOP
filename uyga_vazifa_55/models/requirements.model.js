const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Requirement = sequelize.define(
  "requirement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    obligations: {
      type: DataTypes.STRING,
    },
    work_type: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    residence: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    age_requirement: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.STRING,
    },
    education_level: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    trial_period: {
      type: DataTypes.STRING,
    },
    knowledge: {
      type: DataTypes.STRING,
    },
    personal_qualities: {
      type: DataTypes.STRING,
    },
    other_requirement: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

module.exports = Requirement;
