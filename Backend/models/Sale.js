const mongoose = require("mongoose");

const AddSaleSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    storeId: String,
    quantity: Number,
    date: Date,
    amount: String,
},
)

const AddSale = mongoose.model("Sale", AddSaleSchema);
module.exports = AddSale;