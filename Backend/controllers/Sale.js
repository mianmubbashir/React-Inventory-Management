const Sale = require("../models/Sale");

// Add Sales Details
const addSale = async (req, res) => {
    const addSale = await new Sale({
        userId: req.body.userId,
        productId: req.body.productId,
        storeId: req.body.storeId,
        quantity: req.body.quantity,
        date: req.body.date,
        amount: req.body.amount,
    })
    addSale.save().then((result)=>{
        res.json(result)
      }).catch((error)=>{
         console.log(error)
      })
};

//Get Sale
const getAllSale = async (req, res) => {
    const findAllSale = await Sale.find().sort({ '_id': -1 });
    res.json(findAllSale);
  };

module.exports = {addSale ,getAllSale};