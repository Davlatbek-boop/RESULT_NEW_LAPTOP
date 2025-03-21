const {
  addNewEtymology,
  getAllEtymologys,
  getEtymologyById,
  deleteEtymologyById,
  getEtymologysByEtymology,
} = require("../controllers/etymology.controller");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdmin, addNewEtymology);
router.get("/search",userGuard, userAdmin, getEtymologysByEtymology);
router.get("/", getAllEtymologys);
router.get("/:id",userGuard, userAdmin, getEtymologyById);
router.delete("/:id",userGuard, userAdmin, deleteEtymologyById);

module.exports = router;
