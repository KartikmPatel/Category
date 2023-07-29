const mongoose = require('mongoose');

// create a Connection
mongoose.connect("mongodb://0.0.0.0/userDB",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection SuccessFul"))
    .catch((err) => console.log(err))

// create a model
const testing = new mongoose.Schema({
    title:String,
    description:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
});

const User = new mongoose.model('User',testing);

const createDocument = async () => {
    try{
        const inserting = new User({
            title:"Mongoose is Good",
            description:"Good",
            email:"hello@gmail.com",
            age:25,
        });
        
        const data = await inserting.save();
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

createDocument();
