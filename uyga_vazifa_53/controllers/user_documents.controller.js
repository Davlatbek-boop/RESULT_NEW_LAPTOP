const { errorHandler } = require("../helpers/error_handler");
const UserDocs = require("../models/user_documents.model copy");

const addNewUserDoc = async (req, res) => {
  try {
    const { user_id, type, path } = req.body;
    const newUserDoc = await UserDocs.create({ user_id, type, path });
    res.status(201).send({ message: "New UserDoc added!!!", newUserDoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUserDocs = async (req, res) => {
  try {
    const newUserDoc = await UserDocs.findAll();
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
    const { user_id, type, path } = req.body;

    const userDoc = await UserDocs.update(
      { user_id, type, path },
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
