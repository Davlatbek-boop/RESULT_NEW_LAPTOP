const User = require("../schemas/Users");
const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const user = await User.findById(id);
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, phone_number, email, password, is_active, role, address } =
      req.body;

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newUser = await User.create({
      name,
      phone_number,
      email,
      password,
      is_active,
      role,
      address,
    });
    await newUser.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const user = await User.deleteOne({ _id: id });
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, phone_number, email, password, is_active, role, address } =
      req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const user = await User.updateOne(
      { _id: id },
      { name, phone_number, email, password, is_active, role, address },
    );
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
