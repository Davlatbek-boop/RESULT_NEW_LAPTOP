const {
  addNewRelation,
  getAllRelations,
  getRelationById,
  deleteRelationById,
  getRelationsByRelation,
} = require("../controllers/relation_type.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", addNewRelation);
router.get("/search", getRelationsByRelation);
router.get("/", getAllRelations);
router.get("/:id", getRelationById);
router.delete("/:id",userGuard,userAdminGuard, deleteRelationById);

module.exports = router;
