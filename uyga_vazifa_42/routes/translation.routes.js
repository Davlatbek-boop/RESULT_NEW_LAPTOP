const {
  addNewTranslation,
  getAllTranslations,
  getTranslationById,
  deleteTranslationById,
} = require("../controllers/translation.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/",userGuard,userAdminGuard, addNewTranslation);
router.get("/",userGuard, userSelfGuard, getAllTranslations);
router.get("/:id", getTranslationById);
router.delete("/:id",userGuard, userAdminGuard, deleteTranslationById);

module.exports = router;
