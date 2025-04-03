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
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/",userGuard, userAdminGuard, addNewUser);
router.get("/login", loginUser);
router.get("/logout",userGuard, logoutUser);
router.get("/refreshtoken", userGuard, userAdminGuard, refreshTokenUser);
router.get("/", userGuard, userAdminGuard, getAllUsers);
router.get("/:id",userGuard, userSelfGuard, getUserById);
router.put("/:id", userGuard, userSelfGuard, updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
