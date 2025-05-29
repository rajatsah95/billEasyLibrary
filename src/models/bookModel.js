const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
});

const bookModel = mongoose.model("book", bookSchema, "book");

module.exports = { bookModel };
