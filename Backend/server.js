const express = require("express");
const { main } = require("./models/index");
const Register = require("./models/SignUp");
const productRoute = require("./routes/Product");
const purchaseRoute = require("./routes/Purchase");
const storeRoute = require("./routes/Store");
const saleRoute = require("./routes/Sale");
const cors = require('cors')
const app = express();
main();


app.use(express.json());
app.use(cors());


app.use("/api/Product", productRoute);
app.use("/api/Purchase", purchaseRoute);
app.use("/api/Store", storeRoute);
app.use("/api/Sale", saleRoute);





// SIGNIN USER
let userAuthCheck;
app.post("/api/signin", async (req, res) => {
    console.log(req.body)
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




// SIGNUP USER
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