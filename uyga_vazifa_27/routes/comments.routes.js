const express = require("express");
const {
  getComments,
  getCommentById,
  getAddComment,
  postAddComment,
  deleteCommentById,
  getEditCommentById,
  putEditCommentById,
} = require("../controllers/comments.controller");
const router = express.Router();

router.get("/comments", getComments);

router.get("/comment/:id", getCommentById);

router.get("/add-comment", getAddComment);

router.post("/add-comment", postAddComment);

router.delete("/comment/:id", deleteCommentById);

router.get("/editComment/:id", getEditCommentById);

router.put("/editComment/:id", putEditCommentById);

module.exports = router;
