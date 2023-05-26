const express = require('express');
const app = express();
const fs = require("fs/promises");
const test = require('./routes/test')

app.use(express.json())

app.use('/test',test)

app.get('/',async (req, res) => {
    let data = await fs.readFile('data.json' ,'utf-8');
    let jsondata = JSON.parse(data)
    res.status(200).json({
        success:true,
        page:"home",
        data:jsondata
    })
  })
app.get("/:id",async(req,res)=>{
    console.log(req.params.id)
    let data = await fs.readFile('data.json' ,'utf-8');
    let jsondata = JSON.parse(data);
    let response = jsondata.find((el,index)=>{
        return index ==req.params.id
    })
    res.status(200).json({
        success:true,
        data:response
    })
})
app.post('/',async(req,res)=>{

    let jsonData = await fs.readFile('data.json','utf-8');
    let data = JSON.parse(jsonData);
    data.push(req.body)
    let response = await fs.writeFile('data.json',JSON.stringify(data,null,2))
    res.send('success')
})


app.listen(3000,()=>{
    console.log("server listen 3000 port")
})