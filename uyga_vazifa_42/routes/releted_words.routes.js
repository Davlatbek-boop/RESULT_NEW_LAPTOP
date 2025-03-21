const {
  addNewRelated,
  getAllRelateds,
  getRelatedById,
  deleteRelatedById,
} = require("../controllers/related_words.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", addNewRelated);
router.get("/", getAllRelateds);
router.get("/:id", getRelatedById);
router.delete("/:id",userGuard,userAdminGuard, deleteRelatedById);

module.exports = router;
