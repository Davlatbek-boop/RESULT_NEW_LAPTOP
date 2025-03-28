const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const UserDocuments = sequelize.define("users", 
    {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
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

module.exports = UserDocuments;
