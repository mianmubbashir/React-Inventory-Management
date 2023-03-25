const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
    description: String,
})

const AddProduct = mongoose.model("Add Product", AddProductSchema);
module.exports = AddProduct;