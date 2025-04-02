const {
  addNewInterest,
  getAllInterests,
  getInterestById,
  updateInterestById,
  deleteInterestById,
} = require("../controllers/interests.controller");

const router = require("express").Router();

router.post("/", addNewInterest);
router.get("/", getAllInterests);
router.get("/:id", getInterestById);
router.put("/:id", updateInterestById);
router.delete("/:id", deleteInterestById);

module.exports = router;
