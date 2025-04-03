const { errorHandler } = require("../helpers/error_handler");
const UserSkillss = require("../models/user_skills.model");
const Users = require("../models/users.model");

const addNewUserSkills = async (req, res) => {
  try {
    const { userId, edu_level, languages, experince, bio } = req.body;
    const newUserSkills = await UserSkillss.create({
      userId,
      edu_level,
      languages,
      experince,
      bio,
    });
    res.status(201).send({ message: "New UserSkills added!!!", newUserSkills });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUserSkillss = async (req, res) => {
  try {
    const newUserSkills = await UserSkillss.findAll({ include: Users });
    res.status(200).send({ newUserSkills });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const userSkills = await UserSkillss.findByPk(id);
    res.status(200).send({ userSkills });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUserSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, edu_level, languages, experince, bio } = req.body;

    const userSkills = await UserSkillss.update(
      { userId, edu_level, languages, experince, bio },
      { where: { id }, returning: true }
    );
    res.status(200).send({ userSkills: userSkills[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUserSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const userSkills = await UserSkillss.destroy({ where: { id } });
    res.status(200).send({ userSkills });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewUserSkills,
  getAllUserSkillss,
  getUserSkillsById,
  updateUserSkillsById,
  deleteUserSkillsById,
};
