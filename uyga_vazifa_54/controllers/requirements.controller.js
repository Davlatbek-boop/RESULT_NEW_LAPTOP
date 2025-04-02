const { errorHandler } = require("../helpers/error_handler");
const Requirement = require("../models/requirements.model");

const addNewRequirement = async (req, res) => {
  try {
    const {
      obligations,
      work_type,
      location,
      time,
      residence,
      gender,
      age_requirement,
      experience,
      education_level,
      language,
      trial_period,
      knowledge,
      personal_qualities,
      other_requirements,
    } = req.body;

    const newRequirement = await Requirement.create({
      obligations,
      work_type,
      location,
      time,
      residence,
      gender,
      age_requirement,
      experience,
      education_level,
      language,
      trial_period,
      knowledge,
      personal_qualities,
      other_requirements,
    });
    res
      .status(201)
      .send({ message: "New Requirement added!!!", newRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllRequirements = async (req, res) => {
  try {
    const newRequirement = await Requirement.findAll();
    res.status(200).send({ newRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const requirement = await Requirement.findByPk(id);
    res.status(200).send({ requirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      obligations,
      work_type,
      location,
      time,
      residence,
      gender,
      age_requirement,
      experience,
      education_level,
      language,
      trial_period,
      knowledge,
      personal_qualities,
      other_requirements,
    } = req.body;

    const requirement = await Requirement.update(
      {
        obligations,
        work_type,
        location,
        time,
        residence,
        gender,
        age_requirement,
        experience,
        education_level,
        language,
        trial_period,
        knowledge,
        personal_qualities,
        other_requirements,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ requirement: requirement[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const requirement = await Requirement.destroy({ where: { id } });
    res.status(200).send({ requirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewRequirement,
  getAllRequirements,
  getRequirementById,
  updateRequirementById,
  deleteRequirementById,
};
