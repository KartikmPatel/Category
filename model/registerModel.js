const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

registerData.pre("save",async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

const Register = new mongoose.model('Register',registerData);
module.exports = Register