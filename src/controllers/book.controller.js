const { bookModel } = require("../models/bookModel");
const { ratingModel } = require("../models/ratingModel");
const { getOneBookWithReview, allBook } = require("../util/book.util");
let mongoose = require("mongoose");

let postBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const existingBook = await bookModel.findOne({
      title: { $regex: new RegExp(`^${title}$`, "i") },
      author: { $regex: new RegExp(`^${author}$`, "i") },
    });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: "book already exists, give another book" });
    }
    const newBook = new bookModel({ title, author, genre });
    await newBook.save();
    return res.status(201).json({ message: "book has been created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let putBook = async (req, res) => {
  try {
    const existingBook = await bookModel.findById(req.params.id);
    if (!existingBook) {
      return res.status(404).json({ message: "book not found" });
    }
    await bookModel.findOneAndUpdate(existingBook._id, req.body);
    return res.status(200).json({ message: "book has been updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const existingBook = await bookModel.findById(bookId);
    if (!existingBook) {
      return res.status(404).json({ message: "book not found" });
    }
    await bookModel.findOneAndDelete({ _id: existingBook._id });
    return res.status(200).json({ message: "book has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let getAllBook = async (req, res) => {
  try {
    let query = req.query;
    let payload = {};
    if ("pageNumber" in query && "pageSize" in query) {
      payload.limit = parseInt(query.pageSize);
      payload.offset =
        (parseInt(query.pageNumber) - 1) * parseInt(query.pageSize);
    } else {
      payload.limit = 10;
      payload.offset = 0;
    }
    if ("author" in query) {
      payload.author = { author: query.author };
    } else {
      payload.author = {};
    }
    if ("genre" in query) {
      payload.genre = { genre: query.genre };
    } else {
      payload.genre = {};
    }
    let getAllBook = await allBook(payload);
    return res.status(200).json({ getAllBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let getBookById = async (req, res) => {
  try {
    let bookId = req.params.id;
    let query = req.query;
    let ratings = await ratingModel.find({ bookId });
    let averageRating =
      ratings?.reduce((acc, ele) => acc + ele.rating, 0) / ratings?.length;
    let payload = {};
    if ("pageNumber" in query && "pageSize" in query) {
      payload.limit = parseInt(query.pageSize);
      payload.offset =
        (parseInt(query.pageNumber) - 1) * parseInt(query.pageSize);
    } else {
      payload.limit = 10;
      payload.offset = 0;
    }
    payload.bookId = { bookId: new mongoose.Types.ObjectId(bookId) };
    let review = await getOneBookWithReview(payload);
     let book = await bookModel.findById(bookId);
    return res.status(200).json({book, averageRating, review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let getBookBySearch = async (req, res) => {
  try {
    let payload = {};
    if ("searchText" in req.query) {
      const searchText = req.query.searchText;
      const searchKey = { $regex: searchText, $options: "i" };
      payload.search = {
        $or: [{ title: searchKey }, { author: searchKey }],
      };
    } else {
      payload.search = {};
    }
    let result = await bookModel.aggregate([{ $match: payload.search }]);
    return res.status(200).json({ Book: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postBook,
  putBook,
  deleteBook,
  getAllBook,
  getBookById,
  getBookBySearch,
};
