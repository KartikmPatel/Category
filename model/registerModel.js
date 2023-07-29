const mongoose = require('mongoose');

// model of UserTable
const registerData = new mongoose.Schema({
    firstname: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    pnumber: {
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
});

const Register = new mongoose.model('Register',registerData);
module.exports = Register