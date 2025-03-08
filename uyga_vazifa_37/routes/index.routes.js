const router = require("express").Router();
const userRoute = require("./users.routes");
const districtRoute = require("./district.routes");
const toolRoute = require("./tools.routes");

router.use("/users", userRoute);
router.use("/district", districtRoute);
router.use("/tool", toolRoute);

module.exports = router;
