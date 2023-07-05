const express = require("express");
const router = express.Router();
const {
  Login,register
} = require("../controller/userController");
router.route("/").post(register)
router.route('/login').post(Login)
module.exports = router;