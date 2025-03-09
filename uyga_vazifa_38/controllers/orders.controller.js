const Order = require("../schemas/Order")
const mongoose = require("mongoose")



const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find({});
    res.send({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const order = await Order.findById(id);
    res.send({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const addOrder = async (req, res) => {
  try {
    const { cliendId, shopToolId, orderDate, period, totalPrice } = req.body;

    const oldOrder = await Order.findOne({
      period,
    });
    if (oldOrder) {
      return res.status(400).send({ error: "Bunday foydalanuvchi mavjud" });
    }
    const newOrder = await Order.create({
      cliendId,
      shopToolId,
      orderDate,
      period,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).send({ message: "Foydalanubchi yaratildi", newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const order = await Order.deleteOne({ _id: id });
    res.send({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const updateOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const { cliendId, shopToolId, orderDate, period, totalPrice } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "incorrent ObjectID" });
    }
    const order = await Order.updateOne(
      { _id: id },
      { cliendId, shopToolId, orderDate, period, totalPrice }
    );
    res.send({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  deleteOrderById,
  updateOrderById,
};