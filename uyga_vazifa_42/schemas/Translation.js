const { Schema, model } = require("mongoose");

const translationsSchema = new Schema(
  {
    word_id: Number, 
    language_id: Number, 
    translation_text: String,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Translations", translationsSchema);
