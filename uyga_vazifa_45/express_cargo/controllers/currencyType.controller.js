const { errorHandler } = require("../helpers/errorHandler");
const { currencyTypeValidation } = require("../validations/currencyType.validation");
const Currency = require("../schemas/CurrencyType");

const addCurrency = async (req, res) => {
  try {
    const { error, value } = currencyTypeValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { name, description } = value;

    const newCurrency = await Currency.create({ name, description });
    res.status(201).send({ message: "Yangi currency qo'shildi", newCurrency });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCurrency = async (req, res) => {
  try {
    const AllCurrency = await Currency.find({});
    res.status(200).send({ message: "Barcha Currencylar", AllCurrency });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCurrencyById = async (req, res) => {
  try {
    const id = req.params.id;
    const CurrencyById = await Currency.find({ _id: id });
    res.status(200).send({ message: "Currency", CurrencyById });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCurrencyById = async (req, res) => {
  try {
    const id = req.params.id;
    await Currency.deleteOne({ _id: id });
    res.status(200).send({ message: `${id} li Currency o'chirildi` });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addCurrency,
  getAllCurrency,
  getCurrencyById,
  deleteCurrencyById,
};
