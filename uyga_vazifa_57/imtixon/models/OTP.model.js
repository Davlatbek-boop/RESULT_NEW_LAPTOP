const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Otp = sequelize.define("otp", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  unique_id: {
    type: DataTypes.STRING,
  },
  otp: {
    type: DataTypes.INTEGER,
  },
  verify: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  expiration_time: {
    type: DataTypes.DATE,
  },
});

module.exports = Otp;
