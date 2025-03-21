const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Definitions = require("../schemas/definition");
const {
  definitionsValidation,
} = require("../validations/definition.validation");

const addNewDefinition = async (req, res) => {
  try {
    const { error, value } = definitionsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      word_id,
      definition_text,
      part_of_speech_id,
      definition_order,
      created_at,
      updated_at,
      created_by,
    } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newDefinition = await Definitions.create({
      word_id,
      definition_text,
      part_of_speech_id,
      definition_order,
      created_at,
      updated_at,
      created_by,
    });

    res
      .status(201)
      .send({ message: "Yangi definition qo'shildi", newDefinition });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllDefinitions = async (req, res) => {
  try {
    const definitions = await Definitions.find({});
    res.send({ definitions });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getDefinitionById = async (req, res) => {
  try {
    const id = req.params.id;
    const definitions = await Definitions.find({ _id: id });
    res.send({ definitions });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteDefinitionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const definition = await Definitions.findByIdAndDelete({ _id: id });

    res.send({ definition });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getDefinitionsByDefinition = async (req, res) => {
  try {
    const searchDefinition = req.query.w;
    const alldefinitions = await Definitions.find({
      definition_text: new RegExp(searchDefinition, "i"),
    });
    res.send({ alldefinitions });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewDefinition,
  getAllDefinitions,
  getDefinitionById,
  deleteDefinitionById,
  getDefinitionsByDefinition,
};
