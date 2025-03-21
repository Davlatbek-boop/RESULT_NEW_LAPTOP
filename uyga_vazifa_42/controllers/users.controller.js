const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Users = require("../schemas/Users");
const { usersValidation } = require("../validations/users.validation");
const jwt = require("jsonwebtoken")
const config = require("config")

const addNewUser = async (req, res) => {
  try {
    const { error, value } = usersValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      username,
      first_name,
      last_name,
      full_name,
      email,
      password,
      confirm_password,
      phone,
      image,
      is_active,
      role,
      birth_date,
      birth_year,
      referred,
      coding_lang,
    } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newUser = await Users({
      username,
      first_name,
      last_name,
      full_name,
      email,
      password,
      phone,
      image,
      is_active,
      role,
      birth_date,
      birth_year,
      referred,
      coding_lang,
    });

    res.status(201).send({ message: "Yangi user qo'shildi", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    if (users){
      return res.status(400).send({message:"User not found"})
    }
    res.send({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.find({ _id: id });
    res.send({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const user = await Users.findByIdAndDelete({ _id: id });

    res.send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUsersByUser = async (req, res) => {
  try {
    const searchUser = req.query.w;
    const allusers = await Users.find({
      username: new RegExp(searchUser, "i"),
    });
    res.send({ allusers });
  } catch (error) {
    errorHandler(error, res);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // identification jarayoni
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }

    const validPassword = bcrypt.compareSync(password, user.password); // autentifikatsiya jarayoni
    if (!validPassword) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(payload, config.get("tokenKey"), {
      expiresIn: config.get("tokenTime"),
    });
    res.send({ message: "Tizimga xush kelibsiz", token });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  getUsersByUser,
  loginUser,
};
