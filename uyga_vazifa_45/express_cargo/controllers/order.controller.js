const { errorHandler } = require("../helpers/errorHandler");
const { orderValidation } = require("../validations/order.validation");
const Order = require("../schemas/Orders");

const addOrder = async (req, res) => {
  try {
    const { error, value } = orderValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      order_unique_id,
      full_name,
      phone_number,
      product_link,
      summa,
      currency_type_id,
      truck,
      email,
      description,
    } = value;

    const newOrder = await Order.create({
      order_unique_id,
      full_name,
      phone_number,
      product_link,
      summa,
      currency_type_id,
      truck,
      email,
      description,
    });
    res.status(201).send({ message: "Yangi order qo'shildi", newOrder });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const AllOrder = await Order.find({});
    res.status(200).send({ message: "Barcha Orderlar", AllOrder });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const OrderById = await Order.find({ _id: id });
    res.status(200).send({ message: "Order", OrderById });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    await Order.deleteOne({ _id: id });
    res.status(200).send({ message: `${id} li Order o'chirildi` });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addOrder,
  getAllOrder,
  getOrderById,
  deleteOrderById,
};
