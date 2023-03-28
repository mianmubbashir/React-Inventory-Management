const express = require("express");
const app = express();
const Store = require("../controllers/Store");


//Add Store
app.post('/add', Store.addStore);

//Get Store
app.get('/get', Store.getAllStore);

module.exports = app;