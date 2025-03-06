const {
  getAllStock,
  getStockByID,
  addStock,
  updateStockByID,
  deleteStockByID,
} = require("../controllers/stock.controller");
const router = require("express").Router();

router.get("/", getAllStock);
router.get("/:id", getStockByID);
router.post("/", addStock);
router.put("/:id", updateStockByID);
router.delete("/:id", deleteStockByID);

module.exports = router;
