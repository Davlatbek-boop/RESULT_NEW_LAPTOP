const {
  addOrder,
  getAllOrder,
  getOrderById,
  deleteOrderById,
} = require("../controllers/order.controller");
const adminGuard = require("../middleware/guards/admin.guard");

const router = require("express").Router();

router.post("/",adminGuard, addOrder);
router.get("/",adminGuard, getAllOrder);
router.get("/:id",adminGuard, getOrderById);
router.delete("/:id",adminGuard, deleteOrderById);

module.exports = router;
