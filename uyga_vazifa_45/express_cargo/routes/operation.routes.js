const {
  addOperation,
  getAllOperation,
  getOperationById,
  deleteOperationById,
} = require("../controllers/operation.controller");
const adminGuard = require("../middleware/guards/admin.guard");

const router = require("express").Router();

router.post("/",adminGuard, addOperation);
router.get("/",adminGuard, getAllOperation);
router.get("/:id",adminGuard, getOperationById);
router.delete("/:id",adminGuard, deleteOperationById);

module.exports = router;
