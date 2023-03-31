const express = require("express");
const app = express();
const Purchase = require("../controllers/Purchase");


//Add Purchase Details
app.post('/add', Purchase.addPurchase);

//Get Sale
app.get('/get', Purchase.getAllPurchase);

module.exports = app;