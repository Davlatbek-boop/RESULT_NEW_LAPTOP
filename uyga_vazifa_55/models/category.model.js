const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
    },
    description: {
      type: DataTypes.TEXT,
    },
    parent_category: {
      type: DataTypes.BIGINT,
    },
  },
  {
    // freezeTableName: true,
    // timestamps:false
  }
);

module.exports = Category;
