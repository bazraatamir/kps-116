const express = require("express");
require("dotenv").config();
const connetDB = require("./data");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");
const app = express();
connetDB();
app.use(express.json());
app.use("/api/v2/category", categoryRouter);
app.use("/api/v2/product", productRouter);
app.listen(process.env.port, () => {
  console.log(`server listen ${process.env.port}`);
});
