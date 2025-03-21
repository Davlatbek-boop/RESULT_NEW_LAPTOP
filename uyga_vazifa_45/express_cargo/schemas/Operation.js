const {Schema, model} = require("mongoose")

const operationSchema = new Schema(
    {
        order_id: Number,
        status_id:Number,
        operation_date: Date,
        admin_id: Number,
        description: String
    }
)

module.exports = model("Operation", operationSchema)