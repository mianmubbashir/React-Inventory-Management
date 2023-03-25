const mongoose = require("mongoose");

const AddPurchaseSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
    description: String,
})

const AddPurchase = mongoose.model("Add Purchase", AddPurchaseSchema);
module.exports = AddPurchase;