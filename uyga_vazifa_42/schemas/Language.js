const { boolean } = require("joi")
const {Schema, model} = require("mongoose")


const languagesSchema = new Schema(
    {
        language_name:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            index:true,
            lowercase:true
        },
        language_code:{
            type:Number,
            index:true
        },
        is_active:{
            type:Boolean
        }
    },
    {
        versionKey:false
    }
)

module.exports = model("Languages", languagesSchema)