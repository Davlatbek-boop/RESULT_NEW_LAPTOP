const { Schema, model } = require("mongoose");

const word_categoriesSchema = new Schema(
  {
    word_id: Number, 
    category_id: Number,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Word_categories", word_categoriesSchema);
