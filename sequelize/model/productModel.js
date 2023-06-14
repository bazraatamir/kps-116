const { DataTypes } = require('sequelize');
const sequelize = require('../data');
const Category = require('./categoryModel');

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  
});


Category.hasMany(Product, {foreignKey:'categoryId'});
Product.belongsTo(Category,{foreignKey:'categoryId'});

module.exports = Product;
