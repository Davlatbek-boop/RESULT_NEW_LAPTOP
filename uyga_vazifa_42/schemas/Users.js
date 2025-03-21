const {Schema, model} = require("mongoose")


const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
            first_name:{
            type:String,
        },
        last_name:{
            type:String,
        },
        email:String,
        password:String,
        phone:String,
        role:String,
        is_active:Boolean
    },
    {
        versionKey:false
    }
)

module.exports = model("Users", userSchema)