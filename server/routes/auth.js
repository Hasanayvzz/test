const express = require("express");
const {
  register,
  login,
  deleteUser,
  getAllUsers,
  getUserById,
} = require("../controllers/auth.js");
const router = express.Router();

//post, get , update, delete
router.post("/register", register);
router.post("/login", login);
router.post("/delete", deleteUser);
router.get("/getAll", getAllUsers);
router.get("/:userId", getUserById);

module.exports = router;
