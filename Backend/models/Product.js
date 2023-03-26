const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: Number,
    quantity: Number,
    manufacturer: String,
    description: String,
})

const AddProduct = mongoose.model("Product", AddProductSchema);
module.exports = AddProduct;