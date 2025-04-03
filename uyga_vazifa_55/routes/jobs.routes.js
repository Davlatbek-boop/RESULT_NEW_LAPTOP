const {
  addNewJob,
  getAllJobs,
  getJobById,
  updateJobById,
  deleteJobById,
} = require("../controllers/jobs.controller");

const router = require("express").Router();

router.post("/", addNewJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJobById);
router.delete("/:id", deleteJobById);

module.exports = router;
