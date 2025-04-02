const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const UserDocuments = sequelize.define(
  "user_docs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(30),
    },
    path: {
      type: DataTypes.STRING(15),
    },
  },
  {
    freezeTableName: true,
    // timestamps:false
  }
);

UserDocuments.belongsTo(Users);
Users.hasMany(UserDocuments);

module.exports = UserDocuments;
