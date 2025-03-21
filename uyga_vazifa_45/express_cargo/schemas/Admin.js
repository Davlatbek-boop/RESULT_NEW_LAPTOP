const {Schema, model} = require("mongoose")

const adminSchema = new Schema(
    {
        full_name: String,
        user_name: String,
        hashed_password: String,
        phone_number: String,
        email: String,
        tg_link: String,
        hashed_token: String,
        is_creator: Boolean,
        is_active: Boolean,
        description: String
    }
)

module.exports = model("Admin", adminSchema)