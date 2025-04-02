const {
  addNewJobRequirement,
  getAllJobRequirements,
  getJobRequirementById,
  updateJobRequirementById,
  deleteJobRequirementById,
} = require("../controllers/job_requirements.controller");

const router = require("express").Router();

router.post("/", addNewJobRequirement);
router.get("/", getAllJobRequirements);
router.get("/:id", getJobRequirementById);
router.put("/:id", updateJobRequirementById);
router.delete("/:id", deleteJobRequirementById);

module.exports = router;
