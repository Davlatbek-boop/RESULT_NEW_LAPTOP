const {
  getAllMedicines,
  getMedicinesByID,
  addMedicin,
  updateMedicinByID,
  deleteMedicinByID,
} = require("../controllers/medicines.controller");

const router = require("express").Router();

router.get("/", getAllMedicines);
router.get("/:id", getMedicinesByID);
router.post("/", addMedicin);
router.put("/:id", updateMedicinByID);
router.delete("/:id", deleteMedicinByID);


module.exports = router