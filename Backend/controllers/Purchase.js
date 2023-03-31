const AddPurchase = require("../models/Purchase");

// Add Purchase Details
const addPurchase = async (req, res) => {
    console.log("hello world",req.body)
    const addPurchase = await new AddPurchase({
        productId: req.body.productId,
        quantity: req.body.quantity,
        date: req.body.date,
        amount: req.body.amount,
    })
    addPurchase.save().then((result)=>{
      res.json(result)
    }).catch((error)=>{
       console.log(error)
    })

};


const getAllPurchase = async (req, res) => {
  const findAllPurchase = await AddPurchase.find().sort({ '_id': -1 });
  res.json(findAllPurchase);
};


module.exports = {addPurchase, getAllPurchase};