const {
  getAllPharmacies,
  getPharmaciesByID,
  addPharmacy,
  updatePharmacyByID,
  deletePharmacyByID,
} = require("../controllers/pharmacies.controller");

const router = require("express").Router();

router.get("/", getAllPharmacies);
router.get("/:id", getPharmaciesByID);
router.post("/", addPharmacy);
router.put("/:id", updatePharmacyByID);
router.delete("/:id", deletePharmacyByID);

module.exports = router;
