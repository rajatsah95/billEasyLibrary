const express = require("express");
const dotenv = require("dotenv");
const { AuthRouter } = require("./routes/auth.route");
const { connection } = require("./config/mongodbConnection.config");
const { BookRouter } = require("./routes/book.route");
const { ReviewRouter } = require("./routes/review.route");
const { RatingRouter } = require("./routes/rating.route");
const { SearchRouter } = require("./routes/search.route");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/billEasyLibrary", (req, res) => {
  res.status(200).json({ message: "Welcome to billEasy Library" });
});
app.use("/billEasyLibrary/search", SearchRouter);
app.use("/billEasyLibrary/auth", AuthRouter);
app.use("/billEasyLibrary/book", BookRouter);
app.use("/billEasyLibrary/review", ReviewRouter);
app.use("/billEasyLibrary/rating", RatingRouter);


const PORT = 5000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`Server is running at ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
