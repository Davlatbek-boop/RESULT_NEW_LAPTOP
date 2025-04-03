const {
  addNewPassportData,
  getAllPassportDatas,
  getPassportDataById,
  updatePassportDataById,
  deletePassportDataById,
} = require("../controllers/passport_data.controller");
const roleGuard = require("../middleware/guards/role.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, roleGuard(["admin"]), addNewPassportData);
router.get("/", userGuard, userAdminGuard,getAllPassportDatas);
router.get("/:id",userGuard, roleGuard(["user", "admin"]), getPassportDataById);
router.put("/:id",userGuard, roleGuard(["user", "admin"]), updatePassportDataById);
router.delete("/:id",userGuard, roleGuard(["admin"]), deletePassportDataById);

module.exports = router;
