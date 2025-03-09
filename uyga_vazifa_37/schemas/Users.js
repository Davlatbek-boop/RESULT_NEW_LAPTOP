const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, trim: true, uppercase: true },
    phone_number: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,4}$/,
        "Iltimos, emailni to'g'ri kiriting",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Parol juda qisqa"],
      maxLength: [50, "Parol juda uzun"],
    },
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
