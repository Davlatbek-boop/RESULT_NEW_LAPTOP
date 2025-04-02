const { errorHandler } = require("../helpers/error_handler");
const Category = require("../models/category.model");

const addNewCategory = async (req, res) => {
  try {
    const { name, description, parent_category } = req.body;
    const newCategory = await Category.create({
      name,
      description,
      parent_category,
    });
    res.status(201).send({ message: "New Category added!!!", newCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCategorys = async (req, res) => {
  try {
    const newCategory = await Category.findAll();
    res.status(200).send({ newCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    res.status(200).send({ category });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, parent_category } = req.body;

    const category = await Category.update(
      { name, description, parent_category },
      { where: { id }, returning: true }
    );
    res.status(200).send({ category: category[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.destroy({ where: { id } });
    res.status(200).send({ category });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCategory,
  getAllCategorys,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
