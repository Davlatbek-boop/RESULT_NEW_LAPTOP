const {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contacts.controller");

const router = require("express").Router();

router.post("/", addNewContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);

module.exports = router;
