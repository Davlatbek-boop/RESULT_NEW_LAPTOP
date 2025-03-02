const {
  getAllStation,
  getStationById,
  addStation,
  updateStationById,
  deleteStationById,
} = require("../controllers/gas_station.controller");
const router = require("express").Router();

router.get("/", getAllStation);
router.get("/:id", getStationById);
router.post("/", addStation);
router.put("/:id", updateStationById);
router.delete("/:id", deleteStationById);

module.exports = router;
