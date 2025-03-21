const { errorHandler } = require("../helpers/errorHandler");
const {
  operationValidation,
} = require("../validations/operation.validation");
const Operation = require("../schemas/Operation");

const addOperation = async (req, res) => {
  try {
    const { error, value } = operationValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { order_id, status_id, operation_date, admin_id, description } =
      value;

    const newOperation = await Operation.create({
      order_id,
      status_id,
      operation_date,
      admin_id,
      description,
    });
    res
      .status(201)
      .send({ message: "Yangi operation qo'shildi", newOperation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllOperation = async (req, res) => {
  try {
    const AllOperation = await Operation.find({});
    res.status(200).send({ message: "Barcha Operationlar", AllOperation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getOperationById = async (req, res) => {
  try {
    const id = req.params.id;
    const OperationById = await Operation.find({ _id: id });
    res.status(200).send({ message: "Operation", OperationById });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteOperationById = async (req, res) => {
  try {
    const id = req.params.id;
    await Operation.deleteOne({ _id: id });
    res.status(200).send({ message: `${id} li Operation o'chirildi` });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addOperation,
  getAllOperation,
  getOperationById,
  deleteOperationById,
};
