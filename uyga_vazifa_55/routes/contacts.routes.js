const {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contacts.controller");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/",userGuard, addNewContact);
router.get("/",userGuard, getAllContacts);
router.get("/:id",userGuard, getContactById);
router.put("/:id",userGuard, updateContactById);
router.delete("/:id",userGuard, deleteContactById);

module.exports = router;
