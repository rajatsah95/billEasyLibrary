let { Router } = require("express");
const {
  postReview,
  putReview,
  deleteReview,
} = require("../controllers/review.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

let ReviewRouter = Router();

ReviewRouter.put("/:id", authMiddleware, putReview);
ReviewRouter.delete("/:id", authMiddleware, deleteReview);

module.exports = { ReviewRouter };
