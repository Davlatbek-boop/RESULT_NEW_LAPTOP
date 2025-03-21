const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  order_unique_id: String,
  full_name: String,
  phone_number: String,
  product_link: String,
  summa: Number,
  currency_type_id: Number,
  truck: String,
  email: String,
  description: String,
});

module.exports = model("Order", orderSchema);
