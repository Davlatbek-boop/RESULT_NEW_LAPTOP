const { errorHandler } = require("../helpers/errorHandler");
const { statusValidation } = require("../validations/status.validation");
const Status = require("../schemas/Status");

const addStatus = async (req, res) => {
  try {
    const { error, value } = statusValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { name, description } = value;

    const newStatus = await Status.create({ name, description });
    res.status(201).send({ message: "Yangi status qo'shildi", newStatus });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllStatus = async (req, res) => {
  try {
    const AllStatus = await Status.find({});
    res.status(200).send({ message: "Barcha Statuslar", AllStatus });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const StatusById = await Status.find({ _id: id });
    res.status(200).send({ message: "Status", StatusById });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    await Status.deleteOne({ _id: id });
    res.status(200).send({ message: `${id} li Status o'chirildi` });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addStatus,
  getAllStatus,
  getStatusById,
  deleteStatusById,
};
