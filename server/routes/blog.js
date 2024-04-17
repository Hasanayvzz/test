const express = require("express");
const {
  blogCreate,
  getAllBlogs,
  deleteBlog,
  getBlogById,
} = require("../controllers/blog.js");
const blogRouter = express.Router();

//post, get , update, delete
blogRouter.post("/create", blogCreate);
blogRouter.get("/getAll", getAllBlogs);
blogRouter.post("/delete", deleteBlog);
blogRouter.get("/:blogId", getBlogById);

module.exports = blogRouter;
