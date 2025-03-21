const {
  addNewDefinition,
  getAllDefinitions,
  getDefinitionById,
  deleteDefinitionById,
  getDefinitionsByDefinition,
} = require("../controllers/definition.controller");

const router = require("express").Router();

router.post("/", userGuard, userAdmin, addNewDefinition);
router.get("/search", getDefinitionsByDefinition);
router.get("/", getAllDefinitions);
router.get("/:id", getDefinitionById);
router.delete("/:id", userGuard, userAdmin, deleteDefinitionById);

module.exports = router;
