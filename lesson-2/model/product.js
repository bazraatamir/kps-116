const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product= Schema({
    productName: {
        type: String,
        require:true
    },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'category'
  }
  
});

module.exports = mongoose.model("product", product);