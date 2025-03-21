const {
  addCurrency,
  getAllCurrency,
  getCurrencyById,
  deleteCurrencyById,
} = require("../controllers/currencyType.controller");
const adminGuard = require("../middleware/guards/admin.guard");

const router = require("express").Router();

router.post("/",adminGuard, addCurrency);
router.get("/",adminGuard, getAllCurrency);
router.get("/:id",adminGuard, getCurrencyById);
router.delete("/:id",adminGuard, deleteCurrencyById);

module.exports = router;
