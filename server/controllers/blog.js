const Auth = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Blog = require("../models/blog.js");

const blogCreate = async (req, res) => {
  try {
    const {
      userId,
      star,
      lat,
      lng,
      currency,
      authorName,
      flagImage,
      blogName,
      blogText,
      placeImage,
      placeImageDetails,
      approximatelyPrice,
      country,
    } = req.body;
    const newBlog = await Blog.create({
      userId,
      star,
      authorName,
      blogText,
      placeImage,
      currency,
      blogName,
      placeImageDetails,
      approximatelyPrice,
      country,
      lat,
      lng,
      flagImage,
    });

    res.status(200).json({
      status: "OK",
      newBlog,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Blog creation failed", error: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "OK",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      status: "OK",
      blog,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }
    res.status(200).json({
      status: "OK",
      deletedBlog,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { blogCreate, deleteBlog, getAllBlogs, getBlogById };
