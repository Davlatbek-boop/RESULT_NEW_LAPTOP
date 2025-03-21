const {
  addNewDiscussion,
  getAllDiscussions,
  getDiscussionById,
  deleteDiscussionById,
} = require("../controllers/discussion.controller");

const router = require("express").Router();

router.post("/",userGuard, userAdmin, addNewDiscussion);
router.get("/", getAllDiscussions);
router.get("/:id", getDiscussionById);
router.delete("/:id",userGuard, userAdmin, deleteDiscussionById);

module.exports = router;
