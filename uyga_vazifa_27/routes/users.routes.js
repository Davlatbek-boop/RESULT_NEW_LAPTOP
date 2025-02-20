const express = require("express");
const {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  deleteUserById,
  getEditUserById,
  putEditById,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", getUsers);

router.get("/user/:id", getUserById);

router.get("/add-user", getAddUser);

router.post("/add-user", postAddUser);

router.delete("/user/:id", deleteUserById);

router.get("/edit/:id", getEditUserById);

router.put("/edit/:id", putEditById);

module.exports = router;
