const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const Register = mongoose.model("users", RegisterSchema);
module.exports = Register;