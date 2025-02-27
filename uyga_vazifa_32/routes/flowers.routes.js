const {
  getAllFlowers,
  addNewFlower,
  getFlowerById,
  updateFlowerById,
  deleteFlowerById,
} = require("../controllers/flowers.controller");

const router = require("express").Router();

router.get("/", getAllFlowers);
router.get("/:id", getFlowerById);
router.post("/", addNewFlower);
router.put("/:id", updateFlowerById);
router.delete("/:id", deleteFlowerById);


module.exports = router;
