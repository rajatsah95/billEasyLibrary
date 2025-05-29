const { reviewModel } = require("../models/reviewModel");

let postReview = async (req, res) => {
  try {
    const existingReview = await reviewModel.findOne({
      bookId: req.params.id,
      userId: req.user.id,
    });
    if (existingReview) {
      return res.status(409).json({
        message:
          "your review is already exists, give another book for review as you can give one review for one book.",
      });
    }
    const newReview = new reviewModel({
      bookId: req.params.id,
      userId: req.user.id,
      review: req.body.review,
    });
    await newReview.save();
    return res.status(201).json({ message: "your review has been created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let putReview = async (req, res) => {
  try {
    const existingReview = await reviewModel.findById(req.params.id);
    if (!existingReview) {
      return res.status(404).json({ message: "your review not found" });
    }
    await reviewModel.findOneAndUpdate(existingReview._id, req.body);
    return res.status(200).json({ message: "your review has been updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const existingReview = await reviewModel.findById(reviewId);
    if (!existingReview) {
      return res.status(404).json({ message: "your review not found" });
    }
    await reviewModel.findOneAndDelete({ _id: existingReview._id });
    return res.status(200).json({ message: "your review has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { postReview, putReview, deleteReview };
