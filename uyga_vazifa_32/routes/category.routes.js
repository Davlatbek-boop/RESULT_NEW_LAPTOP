const {
  getAllCategory,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/category.controlller");
const router = require("express").Router();

router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.post("/", addCategory);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);


module.exports = router