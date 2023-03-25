const express = require("express");
const app = express();
const store = require("../controllers/AddStore");



// app.post('/add', product.addProduct);

app.post('/store', function(req, res){
    store.addStore
  });

module.exports = app;