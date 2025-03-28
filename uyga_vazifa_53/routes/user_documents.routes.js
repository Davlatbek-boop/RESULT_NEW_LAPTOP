const {
  addNewUserDoc,
  getAllUserDocs,
  getUserDocById,
  updateUserDocById,
  deleteUserDocById,
} = require("../controllers/user_documents.controller");

const router = require("express").Router();

router.post("/", addNewUserDoc);
router.get("/", getAllUserDocs)
router.get("/:id", getUserDocById)
router.put("/:id", updateUserDocById)
router.delete("/:id", deleteUserDocById)


module.exports = router;
