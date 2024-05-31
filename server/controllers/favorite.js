const Auth = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Favorite = require("../models/favorite.js");

// Favori ekleme veya çıkarma işlemini gerçekleştiren fonksiyon
const toggleFavorite = async (req, res) => {
  const { userId, blogId } = req.body;

  try {
    // Kullanıcının favori listesini bul
    let favorite = await Favorite.findOne({ userId });

    if (!favorite) {
      // Kullanıcı için favori listesi yoksa oluştur
      favorite = new Favorite({ userId, favoriteBlogs: [] });
    }

    const index = favorite.favoriteBlogs.indexOf(blogId);

    if (index === -1) {
      // Blog favori listesinde değilse ekle
      favorite.favoriteBlogs.push(blogId);
    } else {
      // Blog favori listesinde ise çıkar
      favorite.favoriteBlogs.splice(index, 1);
    }

    // Değişiklikleri kaydet
    await favorite.save();

    res.status(200).json({ message: "Favori güncellendi", favorite });
  } catch (error) {
    console.error("Favori güncelleme hatası:", error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
};
const getMyFavorites = async (req, res) => {
  const { userId } = req.body; // URL'den userId alınıyor

  try {
    // Kullanıcının favori listesini bul
    const favorite = await Favorite.findOne({ userId });

    if (!favorite) {
      return res.status(404).json({ error: "Favori bulunamadı" });
    }

    // Kullanıcının favori bloglarını döndür
    res.status(200).json({ favoriteBlogs: favorite.favoriteBlogs });
  } catch (error) {
    console.error("Favori getirme hatası:", error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
};

module.exports = { toggleFavorite, getMyFavorites };
