const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");
const router = require("./routes/auth.js");
const blogRouter = require("./routes/blog.js");
const commentRouter = require("./routes/comment.js");
const favoriteRouter = require("./routes/favorite.js");

const PORT = 3005;

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

app.use("/auth", router);
app.use("/blog", blogRouter);
app.use("/comment", commentRouter);
app.use("/favorite", favoriteRouter);

db();

app.get("/", (req, res) => {
  res.json({
    message: "blog server",
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening from ${PORT}`);
});
