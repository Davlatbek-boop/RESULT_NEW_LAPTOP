const { errorHandler } = require("../helpers/error_handler");
const JobInterview = require("../models/job_interview.model");

const addNewJobInterview = async (req, res) => {
  try {
    const { date, type, notes, status, result, userId, jobId, companyId } =
      req.body;
    const newJobInterview = await JobInterview.create({
      date,
      type,
      notes,
      status,
      result,
      userId,
      jobId,
      companyId,
    });
    res
      .status(201)
      .send({ message: "New JobInterview added!!!", newJobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobInterviews = async (req, res) => {
  try {
    const newJobInterview = await JobInterview.findAll();
    res.status(200).send({ newJobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobInterview = await JobInterview.findByPk(id);
    res.status(200).send({ jobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, type, notes, status, result, userId, jobId, companyId } =
      req.body;

    const jobInterview = await JobInterview.update(
      { date, type, notes, status, result, userId, jobId, companyId },
      { where: { id }, returning: true }
    );
    res.status(200).send({ jobInterview: jobInterview[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobInterview = await JobInterview.destroy({ where: { id } });
    res.status(200).send({ jobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobInterview,
  getAllJobInterviews,
  getJobInterviewById,
  updateJobInterviewById,
  deleteJobInterviewById,
};
