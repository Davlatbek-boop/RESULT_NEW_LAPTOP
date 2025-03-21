const { Schema, model } = require("mongoose");

const categorysSchema = new Schema(
  {
    category_name: String,
    category_description:String,
    parent_category_id: Number,
    is_active: Boolean,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Categorys", categorysSchema);
