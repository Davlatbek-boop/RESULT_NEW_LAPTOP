const {Schema, model} = require("mongoose")

const currencyTypeSchema = new Schema(
    {
        name: String,
        description: String
    }
)

module.exports = model("CurrencyType", currencyTypeSchema)