const { Schema, model } = require("mongoose");

const districtSchema = new Schema(
  {
    name: { type: String, trim: true, uppercase: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("District", districtSchema);
