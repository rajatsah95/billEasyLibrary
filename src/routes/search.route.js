const { Router } = require("express");
const { getBookBySearch } = require("../controllers/book.controller");

let SearchRouter = Router();
SearchRouter.get("", getBookBySearch);

module.exports = { SearchRouter };
