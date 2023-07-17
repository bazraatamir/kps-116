const Category = require("../model/category");

exports.createCategory = async (req, res, next) => {
  const name = req.body.category;
  const filename = req.file.filename;
  console.log(req.file);
  try {
    const newCategory = await Category.create({
      category: name,
      image: filename,
    });
    res.status(200).json({
      success: true,
      newCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.getAllCategory = async (req, res, next) => {
  try {
    const allCategory = await Category.find();
    res.status(200).json({
      success: true,
      allCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
