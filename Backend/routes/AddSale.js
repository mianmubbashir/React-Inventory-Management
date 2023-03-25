const express = require("express");
const app = express();
const sale = require("../controllers/AddSale");



// app.post('/add', product.addProduct);

app.post('/sale', function(req, res){
    sale.addSale
  });

module.exports = app;