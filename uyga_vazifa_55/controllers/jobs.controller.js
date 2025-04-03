const { errorHandler } = require("../helpers/error_handler");
const Job = require("../models/jobs.model");

const addNewJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      number_of_vacancies,
      companyId,
      countryId,
      categoryId,
    } = req.body;
    const newJob = await Job.create({
      title,
      description,
      salary,
      number_of_vacancies,
      companyId,
      countryId,
      categoryId,
    });
    res.status(201).send({ message: "New Job added!!!", newJob });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const newJob = await Job.findAll();
    res.status(200).send({ newJob });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);
    res.status(200).send({ job });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      salary,
      number_of_vacancies,
      companyId,
      countryId,
      categoryId,
    } = req.body;

    const job = await Job.update(
      {
        title,
        description,
        salary,
        number_of_vacancies,
        companyId,
        countryId,
        categoryId,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ job: job[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.destroy({ where: { id } });
    res.status(200).send({ job });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJob,
  getAllJobs,
  getJobById,
  updateJobById,
  deleteJobById,
};
