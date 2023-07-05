const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategory,
  getCategory,
} = require("../controller/CategoryController");
const { Logger } = require("../middleware/logger");
const { Upload } = require("../middleware/upload");
router
  .route("/")
  .post(Logger, Upload.array("image", 10), createCategory)
  .get(getAllCategory);
router.route("/:id").get(getCategory);
module.exports = router;
