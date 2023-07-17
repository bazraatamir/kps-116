const express = require("express");
const router = express.Router();
const {
  Login,
  register,
  addToWishlist,
  getWishList,
} = require("../controller/userController");
const { Logger } = require("../middleware/logger");
router.route("/").post(register);
router.route("/login").post(Login);
router.route("/wishList").post(Logger, addToWishlist).get(Logger, getWishList);
module.exports = router;
