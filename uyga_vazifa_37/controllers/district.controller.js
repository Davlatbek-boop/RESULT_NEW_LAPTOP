const District = require("../schemas/District");
const mongoose = require("mongoose");

const getAllDistricts = async (req, res) => {
  try {
    const district = await District.find({});
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getDistrictById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const district = await District.findById(id);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addDistrict = async (req, res) => {
  try {
    const { name } = req.body;

    const oldDistrict = await District.findOne({ name });
    if (oldDistrict) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newDistrict = await District.create({
      name,
    });
    await newDistrict.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newDistrict });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteDistrictById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const district = await District.deleteOne(id);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateDistrictById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const district = await District.updateOne({ _id: id }, { name });
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAllDistricts,
  getDistrictById,
  addDistrict,
  deleteDistrictById,
  updateDistrictById,
};
