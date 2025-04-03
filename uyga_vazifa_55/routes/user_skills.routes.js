const {
  addNewUserSkills,
  getAllUserSkillss,
  getUserSkillsById,
  updateUserSkillsById,
  deleteUserSkillsById,
} = require("../controllers/user_skills.controller");
const roleGuard = require("../middleware/guards/role.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userGuard, roleGuard([ "admin"]), addNewUserSkills);
router.get("/", userGuard, roleGuard([ "admin"]), getAllUserSkillss);
router.get("/:id", userGuard, roleGuard(["user", "admin"]), getUserSkillsById);
router.put("/:id", userGuard, roleGuard(["user", "admin"]), updateUserSkillsById);
router.delete("/:id", userGuard, roleGuard(["user", "admin"]), deleteUserSkillsById);

module.exports = router;
