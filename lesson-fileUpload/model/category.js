const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = Schema({
  category: {
    type: String,
    require:true
  },
  image: {
    type:String,
  }
  
});

module.exports = mongoose.model("category", Category);
