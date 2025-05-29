let { Router } = require("express");
const {
  postRating,
  putRating,
  deleteRating,
} = require("../controllers/rating.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

let RatingRouter = Router();

RatingRouter.put("/:id", authMiddleware, putRating);
RatingRouter.delete("/:id", authMiddleware, deleteRating);

module.exports = { RatingRouter };
