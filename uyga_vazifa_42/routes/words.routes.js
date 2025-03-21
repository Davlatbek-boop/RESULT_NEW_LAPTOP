const {
  addNewWord,
  getAllWords,
  deleteWordById,
  getWordsByWord,
  getWordById,
} = require("../controllers/words.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdminGuard, addNewWord);
router.get("/", getAllWords);
router.get("/search", getWordsByWord);
router.get("/:id", getWordById);
router.delete("/:id",userGuard, userAdminGuard, deleteWordById);

module.exports = router;
