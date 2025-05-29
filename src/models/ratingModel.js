const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  rating: { type: Number, required: true },
});

const ratingModel = mongoose.model("rating", ratingSchema, "rating");

module.exports = { ratingModel };
