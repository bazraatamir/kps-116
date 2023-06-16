const {DataTypes} = require('sequelize');
const sequelize = require('../data');


const Category = sequelize.define('category', {
    Id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true
}
);

(async () => {
  await sequelize.sync({force:true});
})()

module.exports = Category;
