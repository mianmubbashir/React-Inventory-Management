const mongoose = require("mongoose");
const uri = "mongodb+srv://pakistan123:pakistan321@cluster0.fhspfvh.mongodb.net/InventoryManagement?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("MongoDB Connect")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };