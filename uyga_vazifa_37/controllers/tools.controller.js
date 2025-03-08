const Tool = require("../schemas/Tools");
const mongoose = require("mongoose");

const getAllTools = async (req, res) => {
  try {
    const tool = await Tool.find({});
    res.send({ tool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getToolById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const tool = await Tool.findById(id);
    res.send({ tool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addTool = async (req, res) => {
  try {
    const { name, brand, description, tool_price } = req.body;

    const oldTool = await Tool.findOne({ name });
    if (oldTool) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newTool = await Tool.create({
      name,
      brand,
      description,
      tool_price,
    });
    await newTool.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newTool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteToolById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const toool = await Tool.deleteOne(id);
    res.send({ tool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateToolById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, brand, description, tool_price } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const tool = await Tool.updateOne(
      { _id: id },
      { name, brand, description, tool_price }
    );
    res.send({ tool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAllTools,
  getToolById,
  addTool,
  deleteToolById,
  updateToolById,
};
