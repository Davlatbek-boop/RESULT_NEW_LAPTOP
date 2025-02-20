const express = require("express");
const router = express.Router();
const { getPosts, getPostById, getAddPost, postAddPost } = require("../controllers/posts.controller");

router.get("/posts", getPosts);

router.get("/post/:id", getPostById );

router.get("/add-post", getAddPost);

router.post("/adds-post",postAddPost);


module.exports = router