const mongoose = require("mongoose");

const AddPurchaseSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  quantity: String,
  date: Date,
  amount: String,
},
 { timestamps: true }
)

const AddPurchase = mongoose.model("Purchase", AddPurchaseSchema);
module.exports = AddPurchase;