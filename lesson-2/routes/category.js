const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategory,
  getCategory,
} = require("../controller/CategoryController");
router.route("/").post(createCategory).get(getAllCategory);
router.route("/:id").get(getCategory);
module.exports = router;
