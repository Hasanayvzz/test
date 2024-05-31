const mongoose = require("mongoose");
const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },

  favoriteBlogs: {
    type: Array,
    required: true,
    trim: true,
  },
});
const Favorite = mongoose.model("favorite", FavoriteSchema);
module.exports = Favorite;
