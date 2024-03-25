const express = require("express");
const {
  createComment,
  deleteComment,
  updateComment,
} = require("../controllers/comment.js");
const commentRouter = express.Router();

commentRouter.post("/create", createComment);
commentRouter.get("/delete", deleteComment);
commentRouter.post("/update", updateComment);

module.exports = commentRouter;
