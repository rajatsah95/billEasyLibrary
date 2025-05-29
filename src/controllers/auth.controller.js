const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
require("dotenv").config();
let signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "email already exists, give another email " });
    }
    const salts = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salts);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: "user has been created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "loggedin successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { login, signup };
