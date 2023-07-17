const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProduct,
} = require("../controller/productController");

router.route("/").post(createProduct).get(getAllProduct);
module.exports = router;
