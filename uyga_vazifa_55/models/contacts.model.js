const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Application = require("./applications.model");

const Contacts = sequelize.define(
  "contact",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    file_path: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    terms: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

Contacts.belongsTo(Application);
Application.hasMany(Contacts);

module.exports = Contacts;
