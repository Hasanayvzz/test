const express = require("express");
const {
  blogCreate,
  getAllBlogs,
  deleteBlog,
} = require("../controllers/blog.js");
const blogRouter = express.Router();

//post, get , update, delete
blogRouter.post("/create", blogCreate);
blogRouter.get("/getAll", getAllBlogs);
blogRouter.post("/delete", deleteBlog);

module.exports = blogRouter;
