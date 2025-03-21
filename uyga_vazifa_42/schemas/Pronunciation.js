const { boolean, string } = require("joi");
const { Schema, model } = require("mongoose");

const pronunciationsSchema = new Schema(
  {
    word_id:Number,
    ipa_text: String,
    audio_file_path: Number,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Pronunciations", pronunciationsSchema);
