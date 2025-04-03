const { errorHandler } = require("../helpers/error_handler");
const Review = require("../models/reviews.model");

const addNewReview = async (req, res) => {
  try {
    const { userId, jobId, rating } = req.body;
    const newReview = await Review.create({ userId, jobId, rating });
    res.status(201).send({ message: "New Review added!!!", newReview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const newReview = await Review.findAll();
    res.status(200).send({ newReview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    res.status(200).send({ review });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, jobId, rating } = req.body;

    const review = await Review.update(
      { userId, jobId, rating },
      { where: { id }, returning: true }
    );
    res.status(200).send({ review: review[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.destroy({ where: { id } });
    res.status(200).send({ review });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
