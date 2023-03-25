const express = require("express");
const app = express();
const purchase = require("../controllers/AddPurchase");



// app.post('/add', product.addProduct);

app.post('/purchase', function(req, res){
    purchase.addPurchase
  });

module.exports = app;