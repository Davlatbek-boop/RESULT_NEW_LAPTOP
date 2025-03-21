const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Relations = require("../schemas/Relation_type");
const { relationsValidation } = require("../validations/relation_type.validation");

const addNewRelation = async (req, res) => {
  try {
    const { error, value } = relationsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { relation_name, describtion } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newRelation = await Relations.create({
      relation_name, describtion
    });

    res.status(201).send({ message: "Yangi relation qo'shildi", newRelation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllRelations = async (req, res) => {
  try {
    const relations = await Relations.find({});
    res.send({ relations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRelationById = async (req, res) => {
  try {
    const id = req.params.id;
    const relations = await Relations.find({ _id: id });
    res.send({ relations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRelationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const relation = await Relations.findByIdAndDelete({ _id: id });

    res.send({ relation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRelationsByRelation = async (req, res) => {
  try {
    const searchRelation = req.query.w;
    const allrelations = await Relations.find({
      relation_name: new RegExp(searchRelation, "i"),
    });
    res.send({ allrelations });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewRelation,
  getAllRelations,
  getRelationById,
  deleteRelationById,
  getRelationsByRelation,
};
