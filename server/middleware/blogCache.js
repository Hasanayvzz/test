const express = require("express");
const app = express();
const Blog = require("./models/Blog");

// Basit bir önbellek nesnesi
const cache = {};

// Önbellek ara yazılımı
function cacheMiddleware(req, res, next) {
  const key = "getAll"; // Önbellek anahtarı
  if (cache[key]) {
    // Önbellekte veri varsa
    console.log("From cache:", key);
    return res.json(cache[key]); // Önbellekten veriyi döndür
  } else {
    // Önbellekte veri yoksa
    console.log("Not in cache:", key);
    next(); // Sonraki middleware'e devam et
  }
}

// Önbellek ara yazılımını uygulayın
app.use(cacheMiddleware);

// Blogları almak için endpoint
app.get("/blog/getAll", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Veritabanından blogları al
    // Önbelleğe alınan veriyi gönder
    cache["getAll"] = blogs;
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
