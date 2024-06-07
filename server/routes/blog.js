const express = require("express");
const {
  blogCreate,
  getAllBlogs,
  deleteBlog,
  getBlogById,
  getAllBlogsExcludingImages,
  addStarToBlog,
  updateBlogStatus,
  getAllBlogsExcludingPlaceImageDetails,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/blog.js");
const blogRouter = express.Router();

//post, get , update, delete
blogRouter.post("/create", blogCreate);
blogRouter.get("/getAll", getAllBlogs);
blogRouter.get("/getAllWithoutImage", getAllBlogsExcludingImages);
blogRouter.get(
  "/getAllWithoutPlaceImages",
  getAllBlogsExcludingPlaceImageDetails
);
blogRouter.post("/delete", deleteBlog);
blogRouter.post("/update", updateBlogStatus);
blogRouter.post("/addStar", addStarToBlog);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/addComment", addComment);
blogRouter.post("/updateComment", updateComment);
blogRouter.post("/deleteComment", deleteComment);

module.exports = blogRouter;
