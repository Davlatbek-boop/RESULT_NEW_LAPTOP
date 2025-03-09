const {
  addShopTool,
  getAllShopTools,
  getShopToolById,
  deleteShopToolById,
  updateShopToolById,
} = require("../controllers/shopTool.controller");

const router = require("express").Router();

router.post("/", addShopTool);
router.get("/", getAllShopTools);
router.get("/:id", getShopToolById);
router.delete("/:id", deleteShopToolById);
router.put("/:id", updateShopToolById);


module.exports = router;
