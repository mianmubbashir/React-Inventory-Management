const Store = require("../models/Store");

// Add Store Details
const addStore = async (req, res) => {
    const addStore = await new Store({
        userId: req.body.userId,
        name: req.body.name,
        city: req.body.city,
        location: req.body.location,
    })
    addStore.save().then((result)=>{
        res.json(result)
      }).catch((error)=>{
         console.log(error)
      })

};

//Get Store Details
const getAllStore = async (req, res) => {
    const findAllStore = await Store.find().sort({ '_id': -1 });
    res.json(findAllStore);
  };

module.exports = {addStore, getAllStore};
