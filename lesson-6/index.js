const express = require('express');
const app = express();
const fs = require("fs/promises");
const test = require('./routes/test')

app.use(express.json())

app.use('/test',test)



app.listen(3000,()=>{
    console.log("server listen 3000 port")
})