const {
  getAllRegion,
  getRegionByID,
  addRegion,
  updateRegionByID,
  deleteRegionByID,
} = require("../controllers/region.controller");
const router = require("express").Router();

router.get("/", getAllRegion);
router.get("/:id", getRegionByID);
router.post("/", addRegion);
router.put("/:id", updateRegionByID);
router.delete("/:id", deleteRegionByID);

module.exports = router;
