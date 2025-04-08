const {
  addCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/categories.controller");
const roleGuard = require("../middleware/guards/role.guard");
const tokenGuard = require("../middleware/guards/token.guard");

const router = require("express").Router();

router.post("/",tokenGuard, roleGuard(["admin", "owner"]), addCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.put("/:id",tokenGuard, roleGuard(["admin", "owner"]), updateCategoryById);
router.delete("/:id",tokenGuard, roleGuard(["admin", "owner"]), deleteCategoryById);

module.exports = router;
