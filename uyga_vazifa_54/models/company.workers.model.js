const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Company = require("./company.model");
const Users = require("./users.model");

const CompanyWorkers = sequelize.define(
  "company_workers",
  {
    role: {
      type: DataTypes.STRING(100),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Company.belongsToMany(Users, { through: CompanyWorkers }); // companyId
Users.belongsToMany(Company, { through: CompanyWorkers }); // userId

CompanyWorkers.belongsTo(Users);
CompanyWorkers.belongsTo(Company);

module.exports = CompanyWorkers;
