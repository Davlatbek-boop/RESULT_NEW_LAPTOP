const {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUser,
  logoutUser,
  refreshTokenUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/", addNewUser);
router.get("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/refreshtoken", refreshTokenUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
