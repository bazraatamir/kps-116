const  express = require('express');
const fs = require('fs/promises');
const {getTest,postData}=require('../controller/testController')
const router = express.Router();

router.route('/').get(getTest).post(postData)
 
 
  module.exports = router