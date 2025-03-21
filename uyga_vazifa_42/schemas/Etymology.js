const { Schema, model } = require("mongoose");

const etymologysSchema = new Schema(
  {
    word_id:Number,
    etymology_text: String,
    etymology_order: Number,
    created_at: Date,
    created_by: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Etymologys", etymologysSchema);
