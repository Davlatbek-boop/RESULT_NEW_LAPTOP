const { getAllMedicineType, getMedicineTypeByID, addMedicineType, updateMedicineTypeByID, deleteMedicineTypeByID } = require("../controllers/medicineType.controller")
const router = require("express").Router()

router.get("/", getAllMedicineType);
router.get("/:id", getMedicineTypeByID);
router.post("/", addMedicineType);
router.put("/:id", updateMedicineTypeByID);
router.delete("/:id", deleteMedicineTypeByID);

module.exports = router;