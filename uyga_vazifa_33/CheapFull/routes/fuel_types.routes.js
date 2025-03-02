const {
  getAllFuelTypes,
  getFuelTypesById,
  addFuelTypes,
  updateFuelTypesById,
  deleteFuelTypesById,
} = require("../controllers/fuel_types.controller");
const router = require("express").Router();

router.get("/", getAllFuelTypes);
router.get("/:id", getFuelTypesById);
router.post("/", addFuelTypes);
router.put("/:id", updateFuelTypesById);
router.delete("/:id", deleteFuelTypesById);

module.exports = router;
