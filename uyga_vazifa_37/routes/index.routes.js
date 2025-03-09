const router = require("express").Router();
const userRoute = require("./users.routes");
const districtRoute = require("./district.routes");
const toolRoute = require("./tools.routes");
const orderRoute = require("./orders.routes");
const shopRoute = require("./shop.routes")
const shopToolRoute = require("./shopTool.routes")

router.use("/users", userRoute);
router.use("/district", districtRoute);
router.use("/tool", toolRoute);
router.use("/order", orderRoute);
router.use("/shop", shopRoute)
router.use("/shoptool", shopToolRoute)

module.exports = router;
