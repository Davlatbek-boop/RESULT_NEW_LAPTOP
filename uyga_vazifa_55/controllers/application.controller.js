const { errorHandler } = require("../helpers/error_handler");
const Application = require("../models/applications.model");

const addNewApplication = async (req, res) => {
  try {
    const { userId, jobId, status } = req.body;
    const newApplication = await Application.create({ userId, jobId, status });
    res
      .status(201)
      .send({ message: "New Application added!!!", newApplication });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllApplications = async (req, res) => {
  try {
    const newApplication = await Application.findAll();
    res.status(200).send({ newApplication });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByPk(id);
    res.status(200).send({ application });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, jobId, status } = req.body;

    const application = await Application.update(
      { userId, jobId, status },
      { where: { id }, returning: true }
    );
    res.status(200).send({ application: application[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.destroy({ where: { id } });
    res.status(200).send({ application });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationById,
  deleteApplicationById,
};
