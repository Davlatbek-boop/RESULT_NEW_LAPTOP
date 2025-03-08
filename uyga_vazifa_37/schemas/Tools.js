const { Schema, model } = require("mongoose");

const toolSchema = new Schema(
  {
    name: String,
    brand: String,
    description: String,
    tool_price: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Tool", toolSchema);
