const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  placeImage: {
    type: String,
    required: true,
    trim: true,
  },

  placeImageDetails: {
    type: Array,
    required: true,
    trim: true,
  },
  comments: {
    type: Array,
    required: false,
    trim: true,
  },
  approximatelyPrice: {
    type: String,
    required: false,
    trim: true,
  },
  stars: {
    type: Array,
    required: false,
    trim: true,
  },
  country: {
    type: String,
    required: false,
    trim: true,
  },
  flagImage: {
    type: String,
    required: false,
    trim: true,
  },
  lat: {
    type: String,
    required: false,
    trim: true,
  },
  lng: {
    type: String,
    required: false,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
