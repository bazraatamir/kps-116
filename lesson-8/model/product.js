const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = Schema({
  productName: {
    type: String,
    require: [true, "бүтээгдэхүүнийн нэрийг оруулаагүй байна"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", product);
