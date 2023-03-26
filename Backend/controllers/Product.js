const Product = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
    console.log("hello world",req.body)
    const addProduct = await new Product({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
    })
    addProduct.save().then((result)=>{
      res.json(result)
    }).catch((error)=>{
       console.log(error)
    })

};

module.exports = {addProduct};
