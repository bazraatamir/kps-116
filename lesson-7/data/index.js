const { Sequelize } = require("sequelize");

const con = process.env
console.log(con.user)
const sequelize = new Sequelize(con.database, con.user, con.password, {
    host: con.host,
    dialect: "mysql"
  },
);
(async () => {
  await sequelize.sync({force:true});
})()

module.exports = sequelize
