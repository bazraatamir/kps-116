const {DataTypes} = require('sequelize');
const sequelize = require('../data');


const Category = sequelize.define('Category', {
    categoryId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
    await sequelize.sync({force:true});
  })()

module.exports = Category;
