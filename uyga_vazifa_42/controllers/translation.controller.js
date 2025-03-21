const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Translations = require("../schemas/Translation");
const {
  translationsValidation,
} = require("../validations/translation.validation");

const addNewTranslation = async (req, res) => {
  try {
    const { error, value } = translationsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, language_id, translation_text, created_at, created_by } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newTranslation = await Translations.create({
      word_id,
      language_id,
      translation_text,
      created_at,
      created_by,
    });

    res
      .status(201)
      .send({ message: "Yangi translation qo'shildi", newTranslation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllTranslations = async (req, res) => {
  try {
    const translations = await Translations.find({});
    res.send({ translations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getTranslationById = async (req, res) => {
  try {
    const id = req.params.id;
    const translations = await Translations.find({ _id: id });
    res.send({ translations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteTranslationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const translation = await Translations.findByIdAndDelete({ _id: id });

    res.send({ translation });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewTranslation,
  getAllTranslations,
  getTranslationById,
  deleteTranslationById,
};
