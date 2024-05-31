const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: false,
    trim: true,
  },
  userId: {
    type: String,
    required: false,
    trim: true,
  },
  blogName: {
    type: String,
    required: false,
    trim: true,
  },
  city: {
    type: String,
    required: false,
    trim: true,
  },
  placeImage: {
    type: String,
    required: false,
    trim: true,
  },
  blogText: {
    type: String,
    required: true,
    trim: false,
  },
  currency: {
    type: String,
    required: false,
    trim: true,
  },

  status: {
    type: String,
    required: false,
    trim: true,
    default: "waitingApproval",
  },
  placeImageDetails: {
    type: Array,
    required: false,
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
    type: Number,
    required: false,
    trim: false,
  },
  lng: {
    type: Number,
    required: false,
    trim: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
