const con = require("../data/connect");

class Test {
  constructor(name, age, phoneNumber) {
    (this.name = name), (this.age = age), (this.phoneNumber = phoneNumber);
  }
  static async getUserInfo() {
    let data = await con.execute("SELECT * FROM new_schema.new_table");
    return data;
  }
  static 
}
module.exports = Test;
