const { getAllDistrict } = require("../controllers/district.controller");
const {
  getAllMedicines,
  getMedicinesByID,
  addMedicin,
  updateMedicinByID,
  deleteMedicinByID,
  getAllExpired,
  getAllByMedicines,
  getMedicinesFilter,
  getAllByMedicinesDistrict,
} = require("../controllers/medicines.controller");

const router = require("express").Router();

router.get("/", getAllMedicines);

router.get("/expired", getAllExpired)
router.get("/quantity", getAllByMedicines)
router.get("/filter", getMedicinesFilter)
router.get("/district", getAllByMedicinesDistrict);

router.get("/:id", getMedicinesByID);
router.post("/", addMedicin);
router.put("/:id", updateMedicinByID);
router.delete("/:id", deleteMedicinByID);


module.exports = router