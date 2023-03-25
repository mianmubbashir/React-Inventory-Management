const Stock = require("../models/UpdateStock");

// Update Stock
const updateStock = async (req, res) => {
    const updateStock = await new Stock({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    updateStock.save((err, result) => {

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

module.exports = updateStock;