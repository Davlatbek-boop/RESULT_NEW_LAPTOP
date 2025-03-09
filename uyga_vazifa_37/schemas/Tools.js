const { Schema, model } = require("mongoose");

const toolSchema = new Schema(
  {
    name: { type: String, trim: true, uppercase: true },
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
