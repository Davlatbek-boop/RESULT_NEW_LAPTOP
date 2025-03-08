const { Schema, model } = require("mongoose");

const districtSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("District", districtSchema);
