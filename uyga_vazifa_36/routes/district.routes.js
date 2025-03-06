const {getAllDistrict, getDistrictByID, addDistrict, updateDistrictByID, deleteDistrictByID} = require("../controllers/district.controller")
const router = require('express').Router()

router.get("/", getAllDistrict);
router.get("/:id", getDistrictByID);
router.post("/", addDistrict);
router.put("/:id", updateDistrictByID);
router.delete("/:id", deleteDistrictByID);

module.exports = router;