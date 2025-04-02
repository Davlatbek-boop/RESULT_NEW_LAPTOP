const {
  addNewApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationById,
  deleteApplicationById,
} = require("../controllers/application.controller");

const router = require("express").Router();

router.post("/", addNewApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplicationById);
router.delete("/:id", deleteApplicationById);

module.exports = router;
