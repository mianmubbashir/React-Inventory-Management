const AddProduct = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
    console.log("hello world",req.body)
    const addProduct = await new AddProduct({
        userId: req.body.userId,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
    })
    addProduct.save().then((result)=>{
      res.json(result)
    }).catch((error)=>{
       console.log(error)
    })
};

//Get Product
const getAllProduct = async (req, res) => {
  const findAllProduct = await AddProduct.find().sort({ '_id': -1 });
  res.json(findAllProduct);
};

//Delete Product
const productDelete = async (req, res) => {
  const request = await AddProduct.findByIdAndRemove(req.params.id );
  res.send(request);
};

//Update Product
const productUpdate = async (req, res) => {
  const request = await AddProduct.findByIdAndUpdate({ _id: req.params.id}, { name: req.body.name, manufacturer: req.body.manufacturer, description: req.body.description }, { new: true });
  res.json(request);
};


module.exports = {addProduct, getAllProduct, productDelete, productUpdate};