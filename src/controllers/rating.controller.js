const { ratingModel } = require("../models/ratingModel");

let postRating = async (req, res) => {
  try {
    const existingRating = await ratingModel.findOne({
      bookId: req.params.id,
      userId: req.user.id,
    });
    if (existingRating) {
      return res.status(409).json({
        message:
          "your rating is already exists, give another book for rating as you can give one rating for one book.",
      });
    }
    const newrating = new ratingModel({
      bookId: req.params.id,
      userId: req.user.id,
      rating: req.body.rating,
    });
    await newrating.save();
    return res.status(201).json({ message: "your rating has been created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let putRating = async (req, res) => {
  try {
    const existingrating = await ratingModel.findById(req.params.id);
    if (!existingrating) {
      return res.status(404).json({ message: "your rating not found" });
    }
    await ratingModel.findOneAndUpdate(existingrating._id, req.body);
    return res.status(200).json({ message: "your rating has been updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let deleteRating = async (req, res) => {
  try {
    const ratingId = req.params.id;
    const existingrating = await ratingModel.findById(ratingId);
    if (!existingrating) {
      return res.status(404).json({ message: "your rating not found" });
    }
    await ratingModel.findOneAndDelete({ _id: existingrating._id });
    return res.status(200).json({ message: "your rating has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { postRating, putRating, deleteRating };
