const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const PassportData = require("../models/passport_data.model");
const UserDocuments = require("../models/user_documents.model");
const UserSkills = require("../models/user_skills.model");
const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwtService = require("../services/jwt.service");
const config = require("config");

const addNewUser = async (req, res) => {
  try {
    const { first_name, last_name, phone_number, password, role } = req.body;

    const passwordHash = bcrypt.hashSync(password, 7);
    console.log(passwordHash);
    const newUser = await Users.create({
      first_name,
      last_name,
      phone_number,
      password: passwordHash,
      role,
    });
    res.status(201).send({ message: "New User added!!!", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const loginUser = async (req, res) => {
  try {
    const { number, password } = req.body;
    const user = await Users.findOne({
      where: { phone_number: number },
    });
    if (!user) {
      console.log("Foydalanuvchi topilmadi!");
      return res.status(400).send({ message: "raqam yoki password nogo'g'ri" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ message: "raqam yoki password nogo'g'ri" });
    }

    const payload = {
      id: user.id,
      number: user.email,
      role: user.role,
    };

    const tokens = jwtService.generateTokens(payload);

    user.refresh_token = tokens.refreshToken;
    await user.save();

    console.log(tokens);

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: true, // HTTPS uchun
      sameSite: "Strict",
      maxAge: config.get("refresh_cookie_time"),
    });

    res.status(200).send({
      message: "Access va Refresh tokenlar saqlandi",
      accessToken: tokens.accessToken,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const logoutUser = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res
        .status(400)
        .send({ message: "Cookie refresh token topilmadi" });
    }
    const user = await Users.findOne({
      where: { refresh_token: refreshToken },
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Bunday tokenli foydalanuvchi topilmadi" });
    }
    user.refresh_token = "";
    await user.save();
    res.clearCookie("refreshToken");
    res.send({ message: "User logged out", user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const refreshTokenUser = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res
        .status(400)
        .send({ messege: "Cookieda refresh token topilmadi!" });
    }
    const user = await Users.findOne({
      where: { refresh_token: refreshToken },
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Bunday tokenli foydalanuvchi topilmadi" });
    }
    const payload = {
      id: user.id,
      number: user.phone_number,
      role: user.role,
    };

    const tokens = jwtService.generateTokens(payload);
    user.refresh_token = tokens.refreshToken;
    await user.save();

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      maxAge: config.get("refresh_cookie_time"),
    });
    res.send({
      messege: "Tokenlar yangilandi!",
      accessToken: tokens.accessToken,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const newUser = await Users.findAll({
      include: [PassportData, UserSkills, UserDocuments, Company],
    });
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
    const { first_name, last_name, phone_number, password, role } = req.body;

    const user = await Users.update(
      { first_name, last_name, phone_number, password, role },
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
  loginUser,
  logoutUser,
  refreshTokenUser,
};
