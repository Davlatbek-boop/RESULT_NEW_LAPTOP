const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Categoriess = require("../schemas/Word_categories");
const {
  word_categoriesValidation,
} = require("../validations/word_categories.validation");

const addNewCategories = async (req, res) => {
  try {
    const { error, value } = word_categoriesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, category_id, created_at, created_by } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newCategories = await Categoriess.create({
      word_id,
      category_id,
      created_at,
      created_by,
    });

    res
      .status(201)
      .send({ message: "Yangi categories qo'shildi", newCategories });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCategoriess = async (req, res) => {
  try {
    const categoriess = await Categoriess.find({});
    res.send({ categoriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategoriesById = async (req, res) => {
  try {
    const id = req.params.id;
    const categoriess = await Categoriess.find({ _id: id });
    res.send({ categoriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategoriesById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const categories = await Categoriess.findByIdAndDelete({ _id: id });

    res.send({ categories });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCategories,
  getAllCategoriess,
  getCategoriesById,
  deleteCategoriesById,
};
