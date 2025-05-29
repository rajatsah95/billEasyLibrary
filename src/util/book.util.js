const { bookModel } = require("../models/bookModel");
const { reviewModel } = require("../models/reviewModel");

async function allBook(payload) {
  let result = await bookModel.aggregate([
    { $match: payload.author },
    { $match: payload.genre },
    { $skip: parseInt(payload.offset) },
    { $limit: parseInt(payload.limit) },
  ]);
  return result;
}

async function getOneBookWithReview(payload) {
  let result = await reviewModel.aggregate([
    { $match: payload.bookId },
    { $skip: payload.offset },
    { $limit: payload.limit },
    {
      $lookup: {
        from: "user",
        localField: "userId",
        foreignField: "_id",
        as: "userDetail",
      },
    },
    { $unwind: { path: "$userDetail", preserveNullAndEmptyArrays: true } },
  ]);
  return result;
}

module.exports = { allBook, getOneBookWithReview };
