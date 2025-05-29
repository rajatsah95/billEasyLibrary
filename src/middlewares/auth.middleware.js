const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "please login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: decoded.id });
    if (!user) {
      return res.status(401).json({ message: "please login" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { authMiddleware };
