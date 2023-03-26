const mongoose = require("mongoose");

const AddSaleSchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: Number,
    quantity: Number,
    manufacturer: String,
    description: String,
})

const AddSale = mongoose.model("Sale", AddSaleSchema);
module.exports = AddSale;