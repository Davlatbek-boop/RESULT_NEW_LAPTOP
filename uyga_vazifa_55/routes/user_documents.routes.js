const {
  addNewUserDoc,
  getAllUserDocs,
  getUserDocById,
  updateUserDocById,
  deleteUserDocById,
} = require("../controllers/user_documents.controller");
const roleGuard = require("../middleware/guards/role.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userGuard, roleGuard(["admin"]), addNewUserDoc);
router.get("/",userGuard, userAdminGuard,  getAllUserDocs);
router.get("/:id",userGuard, roleGuard(["user", "admin"]), getUserDocById);
router.put("/:id",userGuard, roleGuard(["user", "admin"]), updateUserDocById);
router.delete("/:id",userGuard, roleGuard(["admin"]), deleteUserDocById);

module.exports = router;
