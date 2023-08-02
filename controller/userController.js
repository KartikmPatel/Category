const path = require('path');
const bcrypt = require('bcrypt');
const Register = require('../model/registerModel');
const session = require('express-session')

// show Register Page
const showRegister = async (req,res) => {
    res.render("register");
}

// show Login Page
const showLogin = async (req,res) => {
    res.render("login");
}

// create a Account
const register = async (req,res) => {
    try {
        // const name = req.body.username;
        // const email = req.body.email;
        // const number = req.body.number;
        // const password = req.body.password
        // const check1 = await Register.find({firstname:name},{email:email},{pnumber:number},{password:password});
        // if(check1)
        // {
        //     res.render("register",{
        //         message:"Account Already Exits.."
        //     })
        // }
        // else
        // {
            // if(req.body.password === res.body.cpassword)
            // {
                password = req.body.password;
                const user = await new Register({
                    firstname: req.body.username,
                    email: req.body.email,
                    pnumber: req.body.number,
                    password: password,
                })
                user.save();
                res.redirect("/");
            // }
            // else
            // {
            //     res.render("register",{
            //         message:"Pleade enter the same Password",
            //     })
            // }
        // }
    } catch (error) {
        res.status(400).send(error);
    }
}

// Login Code
const login = async (req,res) => {
    try {
        const check = await Register.findOne({ email: req.body.email })
        req.session.username = check.firstname;
        req.session.id = check._id;
        const users = session.username
        // console.log(users);
        // console.log(session.username);
        // console.log(session.id);
        // console.log(check.password);
        // console.log(check.firstname);
        const password = req.body.password;
        const isMatch = await bcrypt.compare(password,check.password);
        if (isMatch) {
            if (check.firstname == "Admin") {
                res.redirect("/dashboard")
            }
            else {
                res.redirect("/")
            }
        }
        else {
            res.render("login",{
                message:"Password is Incorrect",
            })
        }
    } catch (error) {
        res.render("login",{
            message:"Username and Password Not match",
        })
    }
}

const logout = async (req,res) => {
        const logout = await session.destroy;
        res.redirect("/");
}

const contact = (req,res) => {
    res.render("contact")
}

module.exports = {
    showRegister,
    showLogin,
    register,
    login,
    logout,
    contact
}
