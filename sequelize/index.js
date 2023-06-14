const express = require('express');
require("dotenv").config();
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product')
const app = express();
app.use(express.json())

app.use('/api/category',categoryRouter);
app.use('/api/product',productRouter);


app.listen(process.env.PORT,()=>{
    console.log(`server listen ${process.env.PORT} port`)
})