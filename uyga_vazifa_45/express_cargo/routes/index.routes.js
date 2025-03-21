const statusRoute = require("./status.routes")
const currencyRoute = require("./currencyType.routes")
const operationRoute = require("./operation.routes")
const orderRoute = require("./order.routes")
const adminRoute = require("./admin.routes")

const   router = require("express").Router()


router.use("/status", statusRoute)
router.use("/currency", currencyRoute)
router.use("/operation", operationRoute)
router.use("/order", orderRoute)
router.use("/admin", adminRoute)

module.exports = router