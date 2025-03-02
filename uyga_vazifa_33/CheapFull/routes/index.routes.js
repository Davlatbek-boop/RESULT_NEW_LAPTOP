const router = require("express").Router()

const stationRoutes = require("./gas_station.routes")
const stationBranchRoutes = require("./gas_station_branch.routes")
const stationFuelTypeRoutes = require("./gas_station_fuel_type.routes")
const fuelTypesRoutes = require("./fuel_types.routes")

router.use("/gas_station", stationRoutes)
router.use("/gas_station_branch",stationBranchRoutes)
router.use("/fuel_type",stationFuelTypeRoutes)
router.use("/fuel-types", fuelTypesRoutes )

module.exports = router