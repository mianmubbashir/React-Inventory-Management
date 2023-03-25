const Store = require("../models/AddStore");

// Add Store Details
const addStore = async (req, res) => {
    const addStore = await new Store({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    addStore.save((err, result) => {

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

module.exports = addStore;
