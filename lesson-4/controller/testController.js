const fs = require('fs/promises');
const TestModel = require('../model/test')

exports.getTest = async (req, res) => {
    let data = await fs.readFile('data.json' ,'utf-8');
    let jsondata = JSON.parse(data)
    res.status(200).json({
        success:true,
        data:jsondata
    })
  }
  exports.podtData = async(req,res)=>{
    let addData = new TestModel(req.body)
    let jsonData = await fs.readFile('data.json','utf-8');
    let data = JSON.parse(jsonData);
    data.push(addData)
    let response = await fs.writeFile('data.json',JSON.stringify(data,null,2))
    res.send('success')
  }