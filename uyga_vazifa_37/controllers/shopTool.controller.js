const ShopTool = require("../schemas/ShopTool");
const mongoose = require("mongoose");

const getAllShopTools = async (req, res) => {
  try {
    const shopTool = await ShopTool.find({});
    res.send({ shopTool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getShopToolById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shopTool = await ShopTool.findById(id);
    res.send({ shopTool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addShopTool = async (req, res) => {
  try {
    const { shopId, toolId, rentPrice } = req.body;

    const oldShop = await ShopTool.findOne({
      shopId,
    });
    if (oldShop) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newShop = await ShopTool.create({
      shopId,
      toolId,
      rentPrice,
    });
    await newShop.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newShop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteShopToolById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shopTool = await ShopTool.deleteOne({ _id: id });
    res.send({ shopTool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateShopToolById = async (req, res) => {
  try {
    const id = req.params.id;
    const { shopId, toolId, rentPrice } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shopTool = await ShopTool.updateOne(
      { _id: id },
      { shopId, toolId, rentPrice }
    );
    res.send({ shopTool });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAllShopTools,
  getShopToolById,
  addShopTool,
  deleteShopToolById,
  updateShopToolById,
};
