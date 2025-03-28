const { errorHandler } = require("../helpers/error_handler");
const PassportDatas = require("../models/passport_data.model");

const addNewPassportData = async (req, res) => {
  try {
    const {
      user_id,
      seria,
      given_date,
      expiration_date,
      born_date,
      nationality,
      born_country,
      born_place,
      given_by_whom,
      citizenship,
      gender,
    } = req.body;
    const newPassportData = await PassportDatas.create({
      user_id,
      seria,
      given_date,
      expiration_date,
      born_date,
      nationality,
      born_country,
      born_place,
      given_by_whom,
      citizenship,
      gender,
    });
    res
      .status(201)
      .send({ message: "New PassportData added!!!", newPassportData });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllPassportDatas = async (req, res) => {
  try {
    const newPassportData = await PassportDatas.findAll();
    res.status(200).send({ newPassportData });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPassportDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const passportData = await PassportDatas.findByPk(id);
    res.status(200).send({ passportData });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updatePassportDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      user_id,
      seria,
      given_date,
      expiration_date,
      born_date,
      nationality,
      born_country,
      born_place,
      given_by_whom,
      citizenship,
      gender,
    } = req.body;

    const passportData = await PassportDatas.update(
      {
        user_id,
        seria,
        given_date,
        expiration_date,
        born_date,
        nationality,
        born_country,
        born_place,
        given_by_whom,
        citizenship,
        gender,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ passportData: passportData[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deletePassportDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const passportData = await PassportDatas.destroy({ where: { id } });
    res.status(200).send({ passportData });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewPassportData,
  getAllPassportDatas,
  getPassportDataById,
  updatePassportDataById,
  deletePassportDataById,
};
