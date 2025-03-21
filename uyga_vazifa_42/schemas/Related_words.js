const { Schema, model } = require("mongoose");

const related_wordsSchema = new Schema(
  {
    word_id: Number,
    related_to_word_id: Number,
    relation_type_id: Number,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Related_words", related_wordsSchema);
