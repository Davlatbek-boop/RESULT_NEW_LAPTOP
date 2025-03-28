const { errorHandler } = require("../helpers/error_handler");
const Users = require("../models/users.model");

const addNewUser = async (req, res) => {
  try {
    const { first_name, last_name, phone_number } = req.body;
    const newUser = await Users.create({ first_name, last_name, phone_number });
    res.status(201).send({ message: "New User added!!!", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const newUser = await Users.findAll();
    res.status(200).send({ newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone_number } = req.body;

    const user = await Users.update(
      { first_name, last_name, phone_number },
      { where: { id }, returning: true }
    );
    res.status(200).send({ user: user[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.destroy({ where: { id } });
    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
