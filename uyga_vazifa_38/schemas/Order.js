const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  cliendId: { type: Number },
  shopToolId: { type: Number, ref: "ShopTool" },
  orderDate: {
    type: String,
    validate: {
      validator: function functionName(value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      },
      message: (props) => `${props.value} - Sana noto'gri`,
    },
  },
  period: Number,
  totalPrice: Number,
});

module.exports = model("Order", OrderSchema);
