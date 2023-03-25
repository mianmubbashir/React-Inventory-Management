const express = require("express");
const app = express();
const stock = require("../controllers/UpdateStock");



// app.post('/add', product.addProduct);

app.post('/stock', function(req, res){
    stock.updateStock
  });

module.exports = app;