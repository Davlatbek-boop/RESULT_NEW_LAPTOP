const { string } = require("joi");
const { Schema, model } = require("mongoose");

const edit_historySchema = new Schema(
  {
    word_id: Number, 
    user_id: Number, 
    edit_typer: String,
    edit_details: String,
    edit_timestamp: Date,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Edit_history", edit_historySchema);
