const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Speechs = require("../schemas/Part_of_speech");
const { speechsValidation } = require("../validations/part_of_speech.validation");

const addNewSpeech = async (req, res) => {
  try {
    const { error, value } = speechsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { name, abbreviation, describtion } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newSpeech = await Speechs.create({
      name, abbreviation, describtion
    });

    res.status(201).send({ message: "Yangi speech qo'shildi", newSpeech });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllSpeechs = async (req, res) => {
  try {
    const speechs = await Speechs.find({});
    res.send({ speechs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getSpeechById = async (req, res) => {
  try {
    const id = req.params.id;
    const speechs = await Speechs.find({ _id: id });
    res.send({ speechs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteSpeechById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const speech = await Speechs.findByIdAndDelete({ _id: id });

    res.send({ speech });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getSpeechsBySpeech = async (req, res) => {
  try {
    const searchSpeech = req.query.w;
    const allspeechs = await Speechs.find({
      name: new RegExp(searchSpeech, "i"),
    });
    res.send({ allspeechs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewSpeech,
  getAllSpeechs,
  getSpeechById,
  deleteSpeechById,
  getSpeechsBySpeech,
};
