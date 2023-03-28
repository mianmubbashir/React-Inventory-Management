const express = require("express");
const app = express();
const Sale = require("../controllers/Sale");


// Add Sale
app.post('/add', Sale.addSale);

//Get Sale
app.get('/get', Sale.getAllSale);

module.exports = app;