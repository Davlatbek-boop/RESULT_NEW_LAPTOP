const { errorHandler } = require("../helpers/error_handler");
const Companys = require("../models/company.model");
const Users = require("../models/users.model");

const addNewCompany = async (req, res) => {
  try {
    const { name, email, phone, description, web_site, userId, countryId } =
      req.body;
    const newCompany = await Companys.create({
      name,
      email,
      phone,
      description,
      web_site,
      userId,
      countryId,
    });
    res.status(201).send({ message: "New Company added!!!", newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCompanys = async (req, res) => {
  try {
    const newCompany = await Companys.findAll({ include: Users });
    res.status(200).send({ newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Companys.findByPk(id);
    res.status(200).send({ company });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, description, web_site, userId, countryId } =
      req.body;

    const company = await Companys.update(
      { name, email, phone, description, web_site, userId, countryId },
      { where: { id }, returning: true }
    );
    res.status(200).send({ company: company[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Companys.destroy({ where: { id } });
    res.status(200).send({ company });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCompany,
  getAllCompanys,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
};
