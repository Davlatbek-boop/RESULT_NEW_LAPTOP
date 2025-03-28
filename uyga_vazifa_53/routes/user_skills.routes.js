const {
  addNewUserSkills,
  getAllUserSkillss,
  getUserSkillsById,
  updateUserSkillsById,
  deleteUserSkillsById,
} = require("../controllers/user_skills.controller");

const router = require("express").Router();

router.post("/", addNewUserSkills);
router.get("/", getAllUserSkillss)
router.get("/:id", getUserSkillsById)
router.put("/:id", updateUserSkillsById)
router.delete("/:id", deleteUserSkillsById)


module.exports = router;
