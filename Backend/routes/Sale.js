const express = require("express");
const app = express();
const Sale = require("../controllers/Sale");



app.post('/add', Sale.addSale);


module.exports = app;