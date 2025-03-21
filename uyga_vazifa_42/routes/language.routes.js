const {
  addNewLanguage,
  getAllLanguages,
  getLanguageById,
  deleteLanguageById,
  getLanguagesByLanguage,
} = require("../controllers/languages.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdminGuard, addNewLanguage);
router.get("/search", getLanguagesByLanguage);
router.get("/", getAllLanguages);
router.get("/:id", getLanguageById);
router.delete("/:id",userGuard, userAdminGuard, deleteLanguageById);

module.exports = router;
