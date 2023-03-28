const AddProduct = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
    console.log("hello world",req.body)
    const addProduct = await new AddProduct({
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
  console.log("Resquest Body", req.body);
  console.log("Resquest Params", req.params.id);
  const {id} = req.params;
  const body = req.body;
  const updatedData = {_id:req.params.id,userId: req.body.userId, name: req.body.name, price: req.body.price, quantity: req.body.quantity, manufacturer: req.body.manufacturer, description: req.body.description  }
  const request = await AddProduct.findByIdAndUpdate(id, updatedData, { returnDocument: 'after', new: true });
  // const newData = await request.save();
  console.log("update request", request);
  res.json(request);
};

module.exports = {addProduct, getAllProduct, productDelete, productUpdate};
