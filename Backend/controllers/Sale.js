const Sale = require("../models/Sale");

// Add Sales Details
const addSale = async (req, res) => {
    const addSale = await new Sale({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
    })
    addSale.save().then((result)=>{
        res.json(result)
      }).catch((error)=>{
         console.log(error)
      })

};

module.exports = {addSale};