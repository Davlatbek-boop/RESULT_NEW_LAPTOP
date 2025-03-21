const {
  addStatus,
  getAllStatus,
  getStatusById,
  deleteStatusById,
} = require("../controllers/status.controller");
const adminGuard = require("../middleware/guards/admin.guard");

const router = require("express").Router();

router.post("/",adminGuard, addStatus);
router.get("/",adminGuard, getAllStatus);
router.get("/:id",adminGuard, getStatusById);
router.delete("/:id",adminGuard, deleteStatusById);

module.exports = router;
