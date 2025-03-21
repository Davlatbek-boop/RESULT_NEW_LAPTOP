const { errorHandler } = require("../helpers/error_handler");
const mongoose = require("mongoose");
const Discussions = require("../schemas/Discussion");
const {
  discussionValidation,
} = require("../validations/discussion.validation");

const addNewDiscussion = async (req, res) => {
  try {
    const { error, value } = discussionValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const { word_id, user_id, discussion_text, created_at, is_active } = value;
    console.log(value);

    // vaqtincha create olib turildi
    const newDiscussion = await Discussions.create({
      word_id,
      user_id,
      discussion_text,
      created_at,
      is_active,
    });

    res
      .status(201)
      .send({ message: "Yangi discussion qo'shildi", newDiscussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussions.find({});
    res.send({ discussions });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getDiscussionById = async (req, res) => {
  try {
    const id = req.params.id;
    const discussions = await Discussions.find({ _id: id });
    res.send({ discussions });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteDiscussionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Incorrect ObjectID" });
    }
    const discussion = await Discussions.findByIdAndDelete({ _id: id });

    res.send({ discussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewDiscussion,
  getAllDiscussions,
  getDiscussionById,
  deleteDiscussionById,
};
