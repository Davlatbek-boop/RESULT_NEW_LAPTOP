const {
  addNewApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationById,
  deleteApplicationById,
} = require("../controllers/application.controller");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", addNewApplication);
router.get("/", getAllApplications);
router.get("/:id",userGuard, userSelfGuard, getApplicationById);
router.put("/:id",userGuard, userSelfGuard, updateApplicationById);
router.delete("/:id",userGuard, userSelfGuard, deleteApplicationById);

module.exports = router;
