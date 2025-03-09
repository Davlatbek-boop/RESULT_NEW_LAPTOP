const {
  addDistrict,
  getAllDistricts,
  getDistrictById,
  deleteDistrictById,
  updateDistrictById,
} = require("../controllers/district.controller");

const router = require("express").Router();

router.post("/", addDistrict);
router.get("/", getAllDistricts);
router.get("/:id", getDistrictById);
router.delete("/:id", deleteDistrictById);
router.put("/:id", updateDistrictById);

module.exports = router;
