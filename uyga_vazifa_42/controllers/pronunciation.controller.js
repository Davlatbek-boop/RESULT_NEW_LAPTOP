const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Pronunciations = require("../schemas/Pronunciation");
const { pronunciationsValidation } = require("../validations/pronunciation.validation");

const addNewPronunciation = async (req, res) => {
  try {
    const { error, value } = pronunciationsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, ipa_text, audio_file_path, created_at, created_by } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newPronunciation = await Pronunciations.create({
      word_id,
      ipa_text,
      audio_file_path,
      created_at,
      created_by,
    });

    res
      .status(201)
      .send({ message: "Yangi pronunciation qo'shildi", newPronunciation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllPronunciations = async (req, res) => {
  try {
    const pronunciations = await Pronunciations.find({});
    res.send({ pronunciations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPronunciationById = async (req, res) => {
  try {
    const id = req.params.id;
    const pronunciations = await Pronunciations.find({ _id: id });
    res.send({ pronunciations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deletePronunciationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const pronunciation = await Pronunciations.findByIdAndDelete({ _id: id });

    res.send({ pronunciation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPronunciationsByPronunciation = async (req, res) => {
  try {
    const searchPronunciation = req.query.w;
    const allpronunciations = await Pronunciations.find({
      ipa_text: new RegExp(searchPronunciation, "i"),
    });
    res.send({ allpronunciations });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewPronunciation,
  getAllPronunciations,
  getPronunciationById,
  deletePronunciationById,
  getPronunciationsByPronunciation,
};
