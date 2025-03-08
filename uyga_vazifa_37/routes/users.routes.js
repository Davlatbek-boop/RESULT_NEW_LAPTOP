const {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/", addUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

module.exports = router;
