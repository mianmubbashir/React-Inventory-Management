const express = require("express");
const app = express();
const Purchase = require("../controllers/Purchase");



app.post('/add', Purchase.addPurchase);


module.exports = app;