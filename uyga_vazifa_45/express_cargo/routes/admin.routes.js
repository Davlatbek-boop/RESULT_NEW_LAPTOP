const {
  addAdmin,
  getAllAdmin,
  getAdminById,
  deleteAdminById,
  loginAdmin,
  activateAdmin,
} = require("../controllers/admin.controller");

const router = require("express").Router();



router.get("/", getAllAdmin);
router.get("/login", loginAdmin);
router.get("/activate/:link", activateAdmin)
router.post("/", addAdmin);
router.get("/:id", getAdminById);
router.delete("/:id", deleteAdminById);

module.exports = router;
