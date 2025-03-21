const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Edits = require("../schemas/Edit_history");
const { edit_historyValidation } = require("../validations/edit_history.validation");

const addNewEdit = async (req, res) => {
  try {
    const { error, value } = edit_historyValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, user_id, edit_type, edit_details, edit_timestamp } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newEdit = await Edits.create({
      word_id,
      user_id,
      edit_type,
      edit_details,
      edit_timestamp,
    });

    res.status(201).send({ message: "Yangi edit qo'shildi", newEdit });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllEdits = async (req, res) => {
  try {
    const edits = await Edits.find({});
    res.send({ edits });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getEditById = async (req, res) => {
  try {
    const id = req.params.id;
    const edits = await Edits.find({ _id: id });
    res.send({ edits });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteEditById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const edit = await Edits.findByIdAndDelete({ _id: id });

    res.send({ edit });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewEdit,
  getAllEdits,
  getEditById,
  deleteEditById,
};
