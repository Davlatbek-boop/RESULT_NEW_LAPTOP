const {
  addNewJobInterview,
  getAllJobInterviews,
  getJobInterviewById,
  updateJobInterviewById,
  deleteJobInterviewById,
} = require("../controllers/job_interview.controller");

const router = require("express").Router();

router.post("/", addNewJobInterview);
router.get("/", getAllJobInterviews);
router.get("/:id", getJobInterviewById);
router.put("/:id", updateJobInterviewById);
router.delete("/:id", deleteJobInterviewById);

module.exports = router;
