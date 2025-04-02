const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const UserSkills = sequelize.define(
  "user_skills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    edu_level: {
      type: DataTypes.STRING(20),
    },
    languages: {
      type: DataTypes.STRING(15),
    },
    experince: {
      type: DataTypes.STRING(100),
    },
    bio: {
      type: DataTypes.STRING(250),
    },
  },
  {
    freezeTableName: true,
    // timestamps:false
  }
);

UserSkills.belongsTo(Users);
Users.hasMany(UserSkills);

module.exports = UserSkills;
