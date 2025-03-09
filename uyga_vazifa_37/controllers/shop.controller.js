const Shop = require("../schemas/Shops");
const mongoose = require("mongoose");

const getAllShops = async (req, res) => {
  try {
    const shop = await Shop.find({});
    res.send({ shop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getShopById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shop = await Shop.findById(id);
    res.send({ shop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addShop = async (req, res) => {
  try {
    const { name, ownerId, phoneNumber, districtId, address, location } =
      req.body;

    const oldShop = await Shop.findOne({
      name,
    });
    if (oldShop) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newShop = await Shop.create({
      name,
      ownerId,
      phoneNumber,
      districtId,
      address,
      location,
    });
    await newShop.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newShop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteShopById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shop = await Shop.deleteOne({ _id: id });
    res.send({ shop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateShopById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, ownerId, phoneNumber, districtId, address, location } =
      req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const shop = await Shop.updateOne(
      { _id: id },
      { name, ownerId, phoneNumber, districtId, address, location }
    );
    res.send({ shop });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAllShops,
  getShopById,
  addShop,
  deleteShopById,
  updateShopById,
};
