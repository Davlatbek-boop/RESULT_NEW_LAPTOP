const {
  addCard,
  getAllCards,
  getCardById,
  updateCardById,
  deleteCardById,
} = require("../controllers/cards.controller");
const clientSelfGuard = require("../middleware/guards/client.self.guard");
const roleGuard = require("../middleware/guards/role.guard");
const tokenGuard = require("../middleware/guards/token.guard");

const router = require("express").Router();

router.post("/", tokenGuard, roleGuard(["client"]), addCard);
router.get("/", tokenGuard, roleGuard(["admin", "creator"]), getAllCards);
router.get("/:id", tokenGuard, roleGuard(["admin", "creator"]), getCardById);
router.put("/:id", tokenGuard, roleGuard(["admin", "creator"]), updateCardById);
router.delete("/:id", tokenGuard, roleGuard(["admin", "creator"]), deleteCardById);

module.exports = router;
