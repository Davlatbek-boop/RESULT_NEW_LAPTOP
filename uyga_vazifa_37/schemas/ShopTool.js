const { Schema, model } = require("mongoose");

const ShopToolSchema = new Schema({
  shopId: {type: Number, ref: "Shop"},
  toolId: {type: Number, ref: "Tools"},
  rentPrice: { type: number },
});

module.exports = model("ShopTool", ShopToolSchema);