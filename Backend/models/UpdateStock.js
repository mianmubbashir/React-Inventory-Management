const mongoose = require("mongoose");

const UpdateStockSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
    description: String,
})

const UpdateStock = mongoose.model("Update Stock", UpdateStockSchema);
module.exports = UpdateStock;