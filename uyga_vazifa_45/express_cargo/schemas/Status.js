const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Status", statusSchema);
