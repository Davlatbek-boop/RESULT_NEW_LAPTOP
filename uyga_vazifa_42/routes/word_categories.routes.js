const {
  addNewCategories,
  getAllCategoriess,
  getCategoriesById,
  deleteCategoriesById,
} = require("../controllers/word_categories.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", addNewCategories);
router.get("/", getAllCategoriess);
router.get("/:id", getCategoriesById);
router.delete("/:id",userGuard, userAdminGuard, deleteCategoriesById);

module.exports = router;
