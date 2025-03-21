const {
  addNewSpeech,
  getAllSpeechs,
  getSpeechById,
  deleteSpeechById,
  getSpeechsBySpeech,
} = require("../controllers/part_of_speech.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdminGuard, addNewSpeech);
router.get("/search",userGuard, userSelfGuard, getSpeechsBySpeech);
router.get("/",userGuard, userSelfGuard, getAllSpeechs);
router.get("/:id",userGuard, userSelfGuard, getSpeechById);
router.delete("/:id",userGuard, userAdminGuard, deleteSpeechById);

module.exports = router;
