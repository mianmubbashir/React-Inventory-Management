const express = require("express");
const app = express();
const product = require("../controllers/AddProduct");



// app.post('/add', product.addProduct);

app.post('/add', function(req, res){
    product.addProduct
  });

module.exports = app;