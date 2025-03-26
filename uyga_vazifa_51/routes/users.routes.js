const {
  addNewUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  loginUser,
  logoutUser,
  refreshTokenUser,
} = require("../controller/users.controller");

const router = require("express").Router();

router.post("/", addNewUser);
router.get("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/refreshtoken", refreshTokenUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
