const User = require("../models/auth.js");
const Blog = require("../models/blog.js");

const createComment = async (req, res) => {
  try {
    const { userId, blogId, content } = req.body;

    // Kullanıcıyı bul
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Blogu bul ve yoruma ekle
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    blog.comments.push({ content: content, user: userId });
    await blog.save();

    res
      .status(200)
      .json({ status: "OK", message: "Yorum başarıyla oluşturuldu" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.body;

    // Blogu bul ve yorumu sil
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    const commentIndex = blog.comments.findIndex(
      (comment) => comment._id == commentId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ message: "Yorum bulunamadı" });
    }

    blog.comments.splice(commentIndex, 1);
    await blog.save();

    res.status(200).json({ status: "OK", message: "Yorum başarıyla silindi" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { userId, blogId, commentId, content } = req.body;

    // Kullanıcıyı bul
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Blogu bul ve yorumu güncelle
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    const comment = blog.comments.find((comment) => comment._id == commentId);
    if (!comment) {
      return res.status(404).json({ message: "Yorum bulunamadı" });
    }
    comment.content = content;
    await blog.save();

    res
      .status(200)
      .json({ status: "OK", message: "Yorum başarıyla güncellendi" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createComment, deleteComment, updateComment };
