const {
  addNewCategory,
  getAllCategorys,
  getCategoryById,
  deleteCategoryById,
  getCategorysByCategory,
} = require("../controllers/category.controller");

const router = require("express").Router();

router.post("/",userGuard, userAdmin, addNewCategory);
router.get("/search", getCategorysByCategory);
router.get("/", getAllCategorys);
router.get("/:id", getCategoryById);
router.delete("/:id",userGuard, userAdmin, deleteCategoryById);

module.exports = router;
