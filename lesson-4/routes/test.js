const  express = require('express');
const fs = require('fs/promises');
const {getTest}=require('../controller/testController')
const router = express.Router();

router.route('/').get(getTest)
  router.route('/name').get(async (req, res) => {
    let data = await fs.readFile('data.json' ,'utf-8');
    let jsondata = JSON.parse(data)
    res.status(200).json({
        success:true,
        page:"name",
        data:jsondata
    })
  })
 
  module.exports = router