const {
  addProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/products.controller");
const roleGuard = require("../middleware/guards/role.guard");
const tokenGuard = require("../middleware/guards/token.guard");

const router = require("express").Router();

router.post("/", tokenGuard, roleGuard(["owner"]), addProduct);
router.get("/", tokenGuard, roleGuard(["admin", "client"]), getAllProduct);
router.get("/:id", tokenGuard, roleGuard(["admin"]), getProductById);
router.put("/:id", tokenGuard, roleGuard(["admin"]), updateProductById);
router.delete("/:id", tokenGuard, roleGuard(["admin"]), deleteProductById);

module.exports = router;
