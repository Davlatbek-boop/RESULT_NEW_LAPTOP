const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: { type: String, trim: true, uppercase: true },
  ownerId: { type: Number, ref: "Users" },
  phoneNumber: {
    type: String,
    validate: {
      validator: function functionName(value) {
        return /^\d{2}-\d{3}-\d{2}-\d{2}$/.test(value);
      },
      message: (props) => `${props.value} - raqam noto'gri`,
    },
  },
  districtId: { type: Number, ref: "District" },
  address: { type: String },
  location: { type: String },
});

module.exports = model("Shop", shopSchema);
