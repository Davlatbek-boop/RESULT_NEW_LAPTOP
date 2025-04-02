const { errorHandler } = require("../helpers/error_handler");
const JobRequirement = require("../models/job_requirements.model");

const addNewJobRequirement = async (req, res) => {
  try {
    const { requirementId, jobId } = req.body;
    const newJobRequirement = await JobRequirement.create({
      requirementId,
      jobId,
    });
    res
      .status(201)
      .send({ message: "New JobRequirement added!!!", newJobRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobRequirements = async (req, res) => {
  try {
    const newJobRequirement = await JobRequirement.findAll();
    res.status(200).send({ newJobRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobRequirement = await JobRequirement.findByPk(id);
    res.status(200).send({ jobRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const { requirementId, jobId } = req.body;

    const jobRequirement = await JobRequirement.update(
      { requirementId, jobId },
      { where: { id }, returning: true }
    );
    res.status(200).send({ jobRequirement: jobRequirement[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobRequirement = await JobRequirement.destroy({ where: { id } });
    res.status(200).send({ jobRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobRequirement,
  getAllJobRequirements,
  getJobRequirementById,
  updateJobRequirementById,
  deleteJobRequirementById,
};
