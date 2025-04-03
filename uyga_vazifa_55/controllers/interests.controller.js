const { errorHandler } = require("../helpers/error_handler");
const Interest = require("../models/interests.model");

const addNewInterest = async (req, res) => {
  try {
    const { userId, jobId } = req.body;
    const newInterest = await Interest.create({ userId, jobId });
    res.status(201).send({ message: "New Interest added!!!", newInterest });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllInterests = async (req, res) => {
  try {
    const newInterest = await Interest.findAll();
    res.status(200).send({ newInterest });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const interest = await Interest.findByPk(id);
    res.status(200).send({ interest });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, jobId } = req.body;

    const interest = await Interest.update(
      { userId, jobId },
      { where: { id }, returning: true }
    );
    res.status(200).send({ interest: interest[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const interest = await Interest.destroy({ where: { id } });
    res.status(200).send({ interest });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewInterest,
  getAllInterests,
  getInterestById,
  updateInterestById,
  deleteInterestById,
};
