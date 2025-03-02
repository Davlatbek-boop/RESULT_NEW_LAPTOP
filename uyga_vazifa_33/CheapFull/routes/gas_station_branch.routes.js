const {
  getAllStationBranch,
  getStationBranchById,
  addStationBranch,
  updateStationBranchById,
  deleteStationBranchById
} = require("../controllers/gas_station_branch.controller");
const router = require("express").Router();

router.get("/", getAllStationBranch);
router.get("/:id", getStationBranchById);
router.post("/", addStationBranch);
router.put("/:id", updateStationBranchById);
router.delete("/:id", deleteStationBranchById);

module.exports = router;
