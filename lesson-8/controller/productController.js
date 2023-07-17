const Product = require("../model/product");
exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      success: true,
      newProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const allProduct = await Product.find().populate("category");
    res.status(200).json({
      success: true,
      allProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
