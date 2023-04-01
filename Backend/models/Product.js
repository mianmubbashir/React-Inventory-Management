const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
    ProductID: String,
    userId: String,
    name: String,
    manufacturer: String,
    description: String,
},
 { timestamps: true }
)

const AddProduct = mongoose.model("Product", AddProductSchema);
module.exports = AddProduct;



