const express = require("express");
const app = express();
const Store = require("../controllers/Store");



app.post('/add', Store.addStore);


module.exports = app;