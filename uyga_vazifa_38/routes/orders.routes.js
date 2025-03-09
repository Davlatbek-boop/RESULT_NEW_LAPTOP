const {
  addOrder,
  getAllOrders,
  getOrderById,
  deleteOrderById,
  updateOrderById,
} = require("../controllers/orders.controller");

const router = require("express").Router();

router.post("/", addOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", deleteOrderById);
router.put("/:id", updateOrderById);

module.exports = router;
