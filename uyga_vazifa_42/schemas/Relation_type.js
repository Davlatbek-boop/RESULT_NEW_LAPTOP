const { Schema, model } = require("mongoose");

const relationsSchema = new Schema(
  {
    relation_name: String,
    description: String
  },
  {
    versionKey: false,
  }
);

module.exports = model("Relations", relationsSchema);
