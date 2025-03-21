const {
  addNewEdit,
  getAllEdits,
  getEditById,
  deleteEditById,
} = require("../controllers/edit_history.controller");

const router = require("express").Router();

router.post("/",userGuard, userAdmin, addNewEdit);
router.get("/",userGuard, userAdmin, getAllEdits);
router.get("/:id",userGuard, userAdmin, getEditById);
router.delete("/:id",userGuard, userAdmin, deleteEditById);

module.exports = router;
