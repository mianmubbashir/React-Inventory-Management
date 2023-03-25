const Product = require("../models/AddProduct");

// Add Product
const addProduct = async (req, res) => {
    const addProduct = await new Product({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    addProduct.save((err, result) => {

        if (err) {
            console.log(err);
            res.status(402).send(err);
        }
        else {
            console.log(result);
            res.status(200).send(result);
        }
    })

};

module.exports = addProduct;
