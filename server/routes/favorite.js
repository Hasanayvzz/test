const express = require("express");
const {
  toggleFavorite,
  getMyFavorites,
} = require("../controllers/favorite.js");
const favoriteRouter = express.Router();

favoriteRouter.post("/create", toggleFavorite);
favoriteRouter.post("/getMyFavorites", getMyFavorites);

module.exports = favoriteRouter;
