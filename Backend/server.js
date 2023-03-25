const express = require("express");
const { main } = require("./models/index");
const Register = require("./models/SignUp");
const productRoute = require("./routes/AddProduct");
const purchaseRoute = require("./routes/AddPurchase");
const stockRoute = require("./routes/UpdateStock");
const storeRoute = require("./routes/AddStore");
const saleRoute = require("./routes/AddSale");
const cors = require('cors')
const app = express();
main();

// const port = 5000;


app.use(express.json());
app.use(cors());


app.use("/api/AddProduct", productRoute);
app.use("/api/AddPurchase", purchaseRoute);
app.use("/api/UpdateStock", stockRoute);
app.use("/api/AddStore", storeRoute);
app.use("/api/AddSale", saleRoute);


app.get("/api", (req, res)=>{
    res.json({
        mian: 'mubashir'
    });

});



// ------------- Signin -------------- 
let userAuthCheck;
app.post("/api/signin", async (req, res) => {
    console.log(req.body)
    // res.send("hi");
    try {
        const user = await Register.findOne({
            email: req.body.email,
            password: req.body.password
        })
        console.log("USER: ", user);
        if (user) {
            res.send(user);
            userAuthCheck = user;

        } else {
            res.status(401).send("Invalid Credentials");
            userAuthCheck = null;

        }
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});


//Getting User Details of login user 
app.get("/api/signin", (req, res) => {

    res.send(userAuthCheck);

});
// ------------------------------------


// ----------- Signup ------------------
app.post("/api/signup", async (req, res) => {
    console.log(req.body);

    let registerUser = new Register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    let newUser = await registerUser.save();

    res.json(newUser);
});



app.listen(4000, () => {
    console.log("Server listening at PORT: 4000");
  });