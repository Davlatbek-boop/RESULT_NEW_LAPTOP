const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Categorys = require("../schemas/Category");
const { categorysValidation } = require("../validations/category.validation");

const addNewCategory = async (req, res) => {
  try {
    const { error, value } = categorysValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { category_name,
      category_description,
      parent_category_id,
      is_active } =
      value;
    console.log(value);

    // vaqtincha create olib turildi
    const newCategory = await Categorys.create({
      category_name,
      category_description,
      parent_category_id,
      is_active
    });

    res.status(201).send({ message: "Yangi category qo'shildi", newCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCategorys = async (req, res) => {
  try {
    const categorys = await Categorys.find({});
    res.send({ categorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const categorys = await Categorys.find({ _id: id });
    res.send({ categorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const category = await Categorys.findByIdAndDelete({ _id: id });

    res.send({ category });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategorysByCategory = async (req, res) => {
  try {
    const searchCategory = req.query.w;
    const allcategorys = await Categorys.find({
      category_name: new RegExp(searchCategory, "i"),
    });
    res.send({ allcategorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCategory,
  getAllCategorys,
  getCategoryById,
  deleteCategoryById,
  getCategorysByCategory,
};
