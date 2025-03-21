const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose")
const Languages = require("../schemas/Language");
const { languagesValidation } = require("../validations/languages.validation");

const addNewLanguage = async (req, res) => {
  try {
    const { error, value } = languagesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      language_name,
      language_code,
      is_active,
    } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newLanguage = await Languages.create({
      language_name,
      language_code,
      is_active,
    });

    res.status(201).send({ message: "Yangi language qo'shildi", newLanguage });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllLanguages = async (req, res) => {
  try {
    const languages = await Languages.find({});
    res.send({ languages });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getLanguageById = async (req, res) => {
  try {
    const id = req.params.id;
    const languages = await Languages.find({ _id: id });
    res.send({ languages });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteLanguageById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const language = await Languages.findByIdAndDelete({ _id: id });

    res.send({ language });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getLanguagesByLanguage = async (req, res) => {
  try {
    const searchLanguage = req.query.w;
    const alllanguages = await Languages.find({ language_name: new RegExp(searchLanguage, "i") });
    res.send({ alllanguages });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewLanguage,
  getAllLanguages,
  getLanguageById,
  deleteLanguageById,
  getLanguagesByLanguage,
};
