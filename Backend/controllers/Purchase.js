const Purchase = require("../models/Purchase");

// Add Purchase Details
const addPurchase = async (req, res) => {
    const addPurchase = await new Purchase({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
    })
    addPurchase.save().then((result)=>{
        res.json(result)
      }).catch((error)=>{
         console.log(error)
      })
}

module.exports = {addPurchase};
