const Auth = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Auth.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.status(200).json({
      status: "OK",
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login, register, getAllUsers, deleteUser, getUserById };
