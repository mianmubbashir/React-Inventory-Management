const mongoose = require("mongoose");

const AddSaleSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
    description: String,
})

const AddSale = mongoose.model("Add Sale", AddSaleSchema);
module.exports = AddSale;