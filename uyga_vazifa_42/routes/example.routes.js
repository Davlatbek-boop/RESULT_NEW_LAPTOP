const {
  addNewExample,
  getAllExamples,
  getExampleById,
  deleteExampleById,
} = require("../controllers/examples.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userGuard, userAdminGuard, addNewExample);
router.get("/", userGuard, userAdminGuard, getAllExamples);
router.get("/:id", userGuard, userAdmin, getExampleById);
router.delete("/:id", userGuard, userAdmin, deleteExampleById);

module.exports = router;
