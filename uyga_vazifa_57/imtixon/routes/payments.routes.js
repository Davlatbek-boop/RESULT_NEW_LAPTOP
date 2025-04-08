const {
  addPayment,
  getAllPayment,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
} = require("../controllers/payments.controller");
const roleGuard = require("../middleware/guards/role.guard");
const tokenGuard = require("../middleware/guards/token.guard");

const router = require("express").Router();

router.post("/", tokenGuard, addPayment);
router.get("/", tokenGuard, roleGuard(["admin", "creator"]), getAllPayment);
router.get("/:id", tokenGuard, roleGuard(["admin", "creator"]), getPaymentById);
router.put(
  "/:id",
  tokenGuard,
  roleGuard(["admin", "creator"]),
  updatePaymentById
);
router.delete(
  "/:id",
  tokenGuard,
  roleGuard(["admin", "creator"]),
  deletePaymentById
);

module.exports = router;
