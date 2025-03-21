const { Schema, model } = require("mongoose");

const examplesSchema = new Schema(
  {
    word_id: Number,
    example_text: String,
    example_translation: String,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Examples", examplesSchema);
