const mongoose = require("mongoose");

const AddStoreSchema = new mongoose.Schema({
  name: String,
  city: String,
  location: String,
})

const AddStore = mongoose.model("Store", AddStoreSchema);
module.exports = AddStore;