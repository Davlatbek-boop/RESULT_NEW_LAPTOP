const {
  addShop,
  getAllShops,
  getShopById,
  deleteShopById,
  updateShopById,
} = require("../controllers/shop.controller");

const router = require("express").Router();

router.post("/", addShop);
router.get("/", getAllShops);
router.get("/:id", getShopById);
router.delete("/:id", deleteShopById);
router.put("/:id", updateShopById);


module.exports = router;
