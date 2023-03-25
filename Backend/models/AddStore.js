const mongoose = require("mongoose");

const AddStoreSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
    description: String,
})

const AddStore = mongoose.model("Add Store", AddStoreSchema);
module.exports = AddStore;