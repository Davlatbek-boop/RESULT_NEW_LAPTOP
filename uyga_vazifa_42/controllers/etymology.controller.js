const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Etymologys = require("../schemas/Etymology");
const { etymologysValidation } = require("../validations/etymology.validation");

const addNewEtymology = async (req, res) => {
  try {
    const { error, value } = etymologysValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, etymology_text, etymology_order, created_at, created_by } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newEtymology = await Etymologys.create({
      word_id,
      etymology_text,
      etymology_order,
      created_at,
      created_by,
    });

    res.status(201).send({ message: "Yangi etymology qo'shildi", newEtymology });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllEtymologys = async (req, res) => {
  try {
    const etymologys = await Etymologys.find({});
    res.send({ etymologys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getEtymologyById = async (req, res) => {
  try {
    const id = req.params.id;
    const etymologys = await Etymologys.find({ _id: id });
    res.send({ etymologys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteEtymologyById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const etymology = await Etymologys.findByIdAndDelete({ _id: id });

    res.send({ etymology });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getEtymologysByEtymology = async (req, res) => {
  try {
    const searchEtymology = req.query.w;
    const alletymologys = await Etymologys.find({
      etymology_text: new RegExp(searchEtymology, "i"),
    });
    res.send({ alletymologys });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewEtymology,
  getAllEtymologys,
  getEtymologyById,
  deleteEtymologyById,
  getEtymologysByEtymology,
};
