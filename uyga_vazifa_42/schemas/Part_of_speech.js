const { Schema, model } = require("mongoose");

const speechsSchema = new Schema(
  {
    name: String,
    abbreviation: String,
    description: String
  },
  {
    versionKey: false,
  }
);

module.exports = model("Speechs", speechsSchema);
