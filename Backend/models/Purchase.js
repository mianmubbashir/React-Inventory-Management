const mongoose = require("mongoose");

const AddPurchaseSchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: Number,
    quantity: Number,
    manufacturer: String,
    description: String,
})

const AddPurchase = mongoose.model("Purchase", AddPurchaseSchema);
module.exports = AddPurchase;