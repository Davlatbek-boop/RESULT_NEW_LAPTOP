const {
  addNewUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  getUsersByUser,
  loginUser,
} = require("../controllers/users.controller");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");
const userAdmin = require("../middleware/guards/user.admin.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const router = require("express").Router();

router.post("/", addNewUser);
router.post("/login", loginUser);
router.get("/search", getUsersByUser);
router.get("/", userGuard, getAllUsers);
router.get("/:id", userGuard, userSelfGuard, getUserById);
router.delete("/:id",userGuard, userAdminGuard, deleteUserById);

module.exports = router;
