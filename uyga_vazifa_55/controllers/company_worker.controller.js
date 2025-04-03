const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const CompanyWorker = require("../models/company.workers.model");
const Users = require("../models/users.model");

const addNewCompanyWorker = async (req, res) => {
  try {
    const { companyId, userId, role } = req.body;
    const newCompanyWorker = await CompanyWorker.create({
      companyId,
      userId,
      role,
    });
    res.status(201).send({ message: "New Company added!!!", newCompanyWorker });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCompanyWorkers = async (req, res) => {
  try {
    const newCompanyWorker = await CompanyWorker.findAll({
      include: [Users, Company],
    });
    res.status(200).send({ newCompanyWorker });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCompanyWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const companyWorker = await CompanyWorker.findByPk(id);
    res.status(200).send({ companyWorker });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompanyWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, description, web_site, userId } = req.body;

    const companyWorker = await CompanyWorker.update(
      { name, email, phone, description, web_site, userId },
      { where: { id }, returning: true }
    );
    res.status(200).send({ companyWorker: company[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompanyWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const companyWorker = await CompanyWorker.destroy({ where: { id } });
    res.status(200).send({ companyWorker });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCompanyWorker,
  getAllCompanyWorkers,
  getCompanyWorkerById,
  updateCompanyWorkerById,
  deleteCompanyWorkerById,
};
