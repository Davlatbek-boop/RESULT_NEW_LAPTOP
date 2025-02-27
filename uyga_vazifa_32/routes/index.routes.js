const router =  require("express").Router()

const flowersRoute = require("./flowers.routes")
const customersRoute = require("./customers.routes")
const addressesRoute = require("./address.routes")
const categoryRoute = require("./category.routes")

router.use("/flowers", flowersRoute)
router.use("/customers", customersRoute)
router.use("/address", addressesRoute)
router.use("/category", categoryRoute)

module.exports = router