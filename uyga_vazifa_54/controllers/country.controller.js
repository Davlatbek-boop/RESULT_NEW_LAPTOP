const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const Country = require("../models/countries.model");

const addNewCountry = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newCountry = await Country.create({ name, code });
    res.status(201).send({ message: "New Country added!!!", newCountry });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCountrys = async (req, res) => {
  try {
    const newCountry = await Country.findAll({ include: Company });
    res.status(200).send({ newCountry });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    res.status(200).send({ country });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const country = await Country.update(
      { name, code },
      { where: { id }, returning: true }
    );
    res.status(200).send({ country: country[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.destroy({ where: { id } });
    res.status(200).send({ country });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCountry,
  getAllCountrys,
  getCountryById,
  updateCountryById,
  deleteCountryById,
};
