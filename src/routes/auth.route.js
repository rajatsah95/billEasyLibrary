let { Router } = require("express");
const { signup, login } = require("../controllers/auth.controller");

let AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/login", login);

module.exports = { AuthRouter };
