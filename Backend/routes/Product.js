const express = require("express");
const app = express();
const Product = require("../controllers/Product");



app.post('/add', Product.addProduct);


module.exports = app;