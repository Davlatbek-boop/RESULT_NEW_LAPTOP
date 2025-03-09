const {
  addTool,
  getAllTools,
  getToolById,
  deleteToolById,
  updateToolById,
} = require("../controllers/tools.controller");

const router = require("express").Router();

router.post("/", addTool);
router.get("/", getAllTools);
router.get("/:id", getToolById);
router.delete("/:id", deleteToolById);
router.put("/:id", updateToolById);

module.exports = router;
