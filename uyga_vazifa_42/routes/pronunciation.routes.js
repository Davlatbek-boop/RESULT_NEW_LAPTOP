const {
  addNewPronunciation,
  getAllPronunciations,
  getPronunciationById,
  deletePronunciationById,
  getPronunciationsByPronunciation,
} = require("../controllers/pronunciation.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdminGuard, addNewPronunciation);
router.get("/search", getPronunciationsByPronunciation);
router.get("/", getAllPronunciations);
router.get("/:id", getPronunciationById);
router.delete("/:id",userGuard, userAdminGuard, deletePronunciationById);

module.exports = router;
