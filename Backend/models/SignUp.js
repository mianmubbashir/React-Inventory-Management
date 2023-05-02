const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
      },
})

const Register = mongoose.model("users", RegisterSchema);
module.exports = Register;