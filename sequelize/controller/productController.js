const Product = require('../model/productModel');



exports.getAllProducts = async (req, res) => {
    // const {name}= req.query
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createProduct = async (req, res) => {
  const { name, description, price, quantity, categoryId } = req.body;

  try {
    const product = await Product.create({ name, description, price, quantity, categoryId });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
