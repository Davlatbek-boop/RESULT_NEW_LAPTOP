const {
  addContract,
  getAllContract,
  getContractById,
  updateContractById,
  deleteContractById,
} = require("../controllers/contracts.controller");
const clientSelfGuard = require("../middleware/guards/client.self.guard");
const roleGuard = require("../middleware/guards/role.guard");
const tokenGuard = require("../middleware/guards/token.guard");

const router = require("express").Router();

router.post("/", tokenGuard, addContract);
router.get("/", tokenGuard, roleGuard(["admin", "creator"]), getAllContract);
router.get(
  "/:id",
  tokenGuard,
  roleGuard(["admin", "creator"]),
  getContractById
);
router.put(
  "/:id",
  tokenGuard,
  roleGuard(["admin", "creator"]),
  updateContractById
);
router.delete(
  "/:id",
  tokenGuard,
  roleGuard(["admin", "creator"]),
  deleteContractById
);

module.exports = router;
