const Sale = require("../models/AddSale");

// Add Sales Details
const addSale = async (req, res) => {
    const addSale = await new Sale({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    addSale.save((err, result) => {

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

module.exports = addSale;