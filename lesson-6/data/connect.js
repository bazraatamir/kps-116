const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "new_schema",
  password: "12345678",
});
let con = connection.promise();

module.exports = con;
