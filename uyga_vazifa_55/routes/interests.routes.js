const {
  addNewInterest,
  getAllInterests,
  getInterestById,
  updateInterestById,
  deleteInterestById,
} = require("../controllers/interests.controller");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", addNewInterest);
router.get("/", getAllInterests);
router.get("/:id",userGuard, userSelfGuard, getInterestById);
router.put("/:id",userGuard, userSelfGuard, updateInterestById);
router.delete("/:id",userGuard, userSelfGuard, deleteInterestById);

module.exports = router;
