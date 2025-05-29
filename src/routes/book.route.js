let { Router } = require("express");
const {
  postBook,
  putBook,
  deleteBook,
  getAllBook,
  getBookById,
  getBookBySearch,
} = require("../controllers/book.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { postReview } = require("../controllers/review.controller");
const { postRating } = require("../controllers/rating.controller");

let BookRouter = Router();

BookRouter.post("", authMiddleware, postBook);
BookRouter.post("/:id/review", authMiddleware, postReview);
BookRouter.post("/:id/rating", authMiddleware, postRating);
BookRouter.put("/:id", authMiddleware, putBook);
BookRouter.delete("/:id", authMiddleware, deleteBook);
BookRouter.get("", getAllBook);
BookRouter.get("/:id", getBookById);
BookRouter.get("/search", getBookBySearch);

module.exports = { BookRouter };
