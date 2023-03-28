const express = require("express");
const app = express();
const Product = require("../controllers/Product");


//Add Product
app.post('/add', Product.addProduct);

//Get Product
app.get('/get', Product.getAllProduct );

//Delete Product
app.delete('/delete/:id', Product.productDelete)

//Update Product
app.put('/update/:id', Product.productUpdate)

module.exports = app;