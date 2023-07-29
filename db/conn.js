const mongoose = require('mongoose');

// Databse Connection
mongoose.connect("mongodb://0.0.0.0/userRegisterDB",{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => { console.log("Connection is Done") })
    .catch((err) => { console.log("Not Connected") });
