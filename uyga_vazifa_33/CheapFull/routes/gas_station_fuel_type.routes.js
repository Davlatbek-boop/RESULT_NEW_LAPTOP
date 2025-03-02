const {
  getAllStationFuelType,
  getStationFuelTypeById,
  addStationFuelType,
  updateStationFuelTypeById,
  deleteStationFuelTypeById
} = require("../controllers/gas_station_fuel_type.controller");
const router = require("express").Router();

router.get("/", getAllStationFuelType);
router.get("/:id", getStationFuelTypeById);
router.post("/", addStationFuelType);
router.put("/:id", updateStationFuelTypeById);
router.delete("/:id", deleteStationFuelTypeById);

module.exports = router;
