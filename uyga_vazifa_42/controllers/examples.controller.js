const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Examples = require("../schemas/Example");
const { examplesValidation } = require("../validations/examples.validation");

const addNewExample = async (req, res) => {
  try {
    const { error, value } = examplesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      word_id,
      example_text,
      example_translation,
      created_at,
      created_by,
    } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newexample = await Examples.create({
      word_id,
      example_text,
      example_translation,
      created_at,
      created_by,
    });

    res.status(201).send({ message: "Yangi example qo'shildi", newexample });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllExamples = async (req, res) => {
  try {
    const examples = await Examples.find({});
    res.send({ examples });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getExampleById = async (req, res) => {
  try {
    const id = req.params.id;
    const examples = await Examples.find({ _id: id });
    res.send({ examples });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteExampleById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const example = await Examples.findByIdAndDelete({ _id: id });

    res.send({ example });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewExample,
  getAllExamples,
  getExampleById,
  deleteExampleById,
};
