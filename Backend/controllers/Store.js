const Store = require("../models/Store");

// Add Store Details
const addStore = async (req, res) => {
    const addStore = await new Store({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    addStore.save().then((result)=>{
        res.json(result)
      }).catch((error)=>{
         console.log(error)
      })

};

module.exports = {addStore};
