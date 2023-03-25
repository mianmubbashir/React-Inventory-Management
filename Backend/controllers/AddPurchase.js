const Purchase = require("../models/AddPurchase");

// Add Purchase Details
const addPurchase = async (req, res) => {
    const addPurchase = await new Purchase({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    addPurchase.save((err, result) => {

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

module.exports = addPurchase;
