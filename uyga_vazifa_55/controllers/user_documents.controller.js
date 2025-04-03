const { errorHandler } = require("../helpers/error_handler");
const UserDocs = require("../models/user_documents.model");
const Users = require("../models/users.model");

const addNewUserDoc = async (req, res) => {
  try {
    const { userId, type, path } = req.body;
    const newUserDoc = await UserDocs.create({ userId, type, path });
    res.status(201).send({ message: "New UserDoc added!!!", newUserDoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUserDocs = async (req, res) => {
  try {
    const newUserDoc = await UserDocs.findAll({
      include: { model: Users, attributes: ["first_name"], required: true }, // required: true barcha Users ga bog'langanlarini chiqaradi
      // attributes:["type"]
    });
    res.status(200).send({ newUserDoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserDocById = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await UserDocs.findByPk(id);
    res.status(200).send({ userDoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUserDocById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, type, path } = req.body;

    const userDoc = await UserDocs.update(
      { userId, type, path },
      { where: { id }, returning: true }
    );
    res.status(200).send({ userDoc: userDoc[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUserDocById = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await UserDocs.destroy({ where: { id } });
    res.status(200).send({ userDoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewUserDoc,
  getAllUserDocs,
  getUserDocById,
  updateUserDocById,
  deleteUserDocById,
};
