const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: false,
    default: "blogUser",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Auth = mongoose.model("auth", AuthSchema);
module.exports = Auth;
