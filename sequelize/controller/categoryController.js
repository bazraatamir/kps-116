const Category = require('../model/categoryModel');

// Get all categories
exports.getAllCategories = async (req, res) => {
  const {name}= req.query
  try {
    const categories = await Category.findAll(
     { include:{
          model:"category",
          name:name,
      }
    }
    );
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



