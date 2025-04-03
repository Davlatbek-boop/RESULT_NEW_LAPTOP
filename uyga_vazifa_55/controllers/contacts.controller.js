const { errorHandler } = require("../helpers/error_handler");
const Contact = require("../models/contacts.model");

const addNewContact = async (req, res) => {
  try {
    const { applicationId, file_path, start_date, end_date, terms } = req.body;
    const newContact = await Contact.create({
      applicationId,
      file_path,
      start_date,
      end_date,
      terms,
    });
    res.status(201).send({ message: "New Contact added!!!", newContact });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const newContact = await Contact.findAll();
    res.status(200).send({ newContact });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    res.status(200).send({ contact });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const { application_id, file_path, start_date, end_date, terms } = req.body;

    const contact = await Contact.update(
      { application_id, file_path, start_date, end_date, terms },
      { where: { id }, returning: true }
    );
    res.status(200).send({ contact: contact[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.destroy({ where: { id } });
    res.status(200).send({ contact });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
};
