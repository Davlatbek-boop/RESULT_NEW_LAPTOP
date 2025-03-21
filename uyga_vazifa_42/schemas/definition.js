const { Schema, model } = require("mongoose");

const definitionsSchema = new Schema(
  {
    word_id: String,
    definition_text: String,
    part_of_speech_id: Number,
    definition_order: Number,
    created_at: Date,
    updated_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Definitions", definitionsSchema);
