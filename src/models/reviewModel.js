const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  review: { type: String, required: true },
});

const reviewModel = mongoose.model("review", reviewSchema, "review");

module.exports = { reviewModel };
