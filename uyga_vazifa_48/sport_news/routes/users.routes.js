const { addNewUser, getAllUsers, getUserById, deleteUserById } = require("../controller/users.controller")

const router = require("express").Router()


router.post("/", addNewUser)
router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.delete("/:id",deleteUserById)

module.exports = router