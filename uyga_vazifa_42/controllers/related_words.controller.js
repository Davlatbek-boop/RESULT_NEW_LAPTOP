const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Relateds = require("../schemas/Related_words");
const { relatedsValidation } = require("../validations/related_words.validation");

const addNewRelated = async (req, res) => {
  try {
    const { error, value } = relatedsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      word_id,
      related_to_word_id,
      relation_type_id,
      created_at,
      created_by,
    } = value;
    console.log(value);

    const newRelated = await Relateds.create({
      word_id,
      related_to_word_id,
      relation_type_id,
      created_at,
      created_by,
    });

    res.status(201).send({ message: "Yangi related qo'shildi", newRelated });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllRelateds = async (req, res) => {
  try {
    const relateds = await Relateds.find({});
    res.send({ relateds });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRelatedById = async (req, res) => {
  try {
    const id = req.params.id;
    const relateds = await Relateds.find({ _id: id });
    res.send({ relateds });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRelatedById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const related = await Relateds.findByIdAndDelete({ _id: id });

    res.send({ related });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewRelated,
  getAllRelateds,
  getRelatedById,
  deleteRelatedById,
};
