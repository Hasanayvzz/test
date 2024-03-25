const User = require("../models/auth.js");
const Blog = require("../models/blog.js");

const createStar = async (req, res) => {
  try {
    const { userId, blogId, rating } = req.body;

    // Kullanıcıyı bul
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Blogu bul ve yıldızı ekle
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    // Puanı kontrol et
    if (rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "Puan 1 ile 5 arasında olmalıdır" });
    }

    // Eğer kullanıcı zaten bu blogu yıldızladıysa işlem yapma
    if (blog.stars.some((star) => star.user.toString() === userId)) {
      return res.status(400).json({ message: "Bu blog zaten yıldızlanmış" });
    }

    blog.stars.push({ user: userId, rating: rating });
    await blog.save();

    res.status(200).json({ status: "OK", message: "Yıldız başarıyla eklendi" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteStar = async (req, res) => {
  try {
    const { userId, blogId } = req.body;

    // Kullanıcıyı bul
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Blogu bul ve yıldızı kaldır
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    const starIndex = blog.stars.indexOf(userId);
    if (starIndex === -1) {
      return res.status(400).json({ message: "Bu blog yıldızlı değil" });
    }

    blog.stars.splice(starIndex, 1);
    await blog.save();

    res
      .status(200)
      .json({ status: "OK", message: "Yıldız başarıyla kaldırıldı" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateStar = async (req, res) => {
  try {
    const { userId, blogId } = req.body;

    // Kullanıcıyı bul
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Blogu bul ve yıldızı güncelle
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog bulunamadı" });
    }

    // Eğer kullanıcı zaten bu blogu yıldızladıysa işlem yapma
    if (blog.stars.includes(userId)) {
      return res.status(400).json({ message: "Bu blog zaten yıldızlanmış" });
    }

    blog.stars.push(userId);
    await blog.save();

    res
      .status(200)
      .json({ status: "OK", message: "Yıldız başarıyla güncellendi" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createStar, deleteStar, updateStar };
