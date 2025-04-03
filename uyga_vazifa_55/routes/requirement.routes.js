const {
  addNewRequirement,
  getAllRequirements,
  getRequirementById,
  updateRequirementById,
  deleteRequirementById,
} = require("../controllers/requirements.controller");

const router = require("express").Router();

router.post("/", addNewRequirement);
router.get("/", getAllRequirements);
router.get("/:id", getRequirementById);
router.put("/:id", updateRequirementById);
router.delete("/:id", deleteRequirementById);

module.exports = router;
