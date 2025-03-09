const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    phone_number: String,
    email: String,
    password: String,
    is_active: Boolean,
    role: String,
    address: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
