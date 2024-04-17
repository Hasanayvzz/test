const Auth = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Blog = require("../models/blog.js");

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (user) {
      return res.status(500).json({ message: "Bu e-mail zaten mevcut" });
    }
    if (password.length < 6) {
      return res
        .status(500)
        .json({ message: "Şifre 6 karakter üzeri olmalıdır" });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await Auth.create({
      fullName,
      email,
      password: passwordHash,
    });
    const userToken = jwt.sign({ id: newUser.id }, process.env.API_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(201).json({
      status: "OK",
      newUser,
      userToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "Kullanıcı bulunamadı!" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(500).json({
        message: "Şifre yanlış!",
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.API_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await Auth.find();
    res.status(200).json({
      status: "OK",
      users,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const deletedUser = await Auth.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.status(200).json({
      status: "OK",
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addProfileImage = async (req, res) => {
  try {
    const { userId, profileImage } = req.body;

    // Kullanıcıyı bulun
    let user = await Auth.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Profil resmini güncelle
    if (profileImage) user.profileImage = profileImage;

    // Değişiklikleri kaydet
    user = await user.save();

    res.status(200).json({
      status: "OK",
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    // Kullanıcıyı bul
    const userPromise = Auth.findById(userId);

    // Kullanıcının bloglarını bul
    const blogsPromise = Blog.find({ userId: userId });

    // Kullanıcı ve blogları paralel olarak al
    const [user, blogs] = await Promise.all([userPromise, blogsPromise]);

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Yorum ve yıldız sayılarını hesapla
    let totalComments = 0;
    let totalStars = 0;
    for (const blog of blogs) {
      totalComments += blog.comments.length;
      totalStars += blog.stars.length;
    }

    // Aritmetik ortalama hesapla
    const averageStars = blogs.length > 0 ? totalStars / blogs.length : 0;

    res.status(200).json({
      status: "OK",
      user: {
        ...user.toJSON(),
        totalBlogs: blogs.length,
        totalComments: totalComments,
        totalStars: totalStars,
        averageStars: averageStars,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
  getAllUsers,
  deleteUser,
  getUserById,
  addProfileImage,
};
