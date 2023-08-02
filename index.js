const express = require('express');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const app = express();
const bcrypt = require('bcrypt');
const { exit } = require('process');
require("./db/conn");

const port = process.env.PORT || 3000

// session set-up
app.use(session({
    secret: "session-key",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));

// View Files set-up
const templatePartial = path.join(__dirname, "./views/partials");
app.set("view engine", "hbs")
// app.set("views", templatePath)
hbs.registerPartials(templatePartial);

app.use(express.urlencoded({ extended: false }));

// import Routing File
app.use("/",require(path.join(__dirname,"./routes/route")));

// Assign Port and Runnig the site
app.listen(port, () => {
    console.log(`Port is Running on ${port}`);
})
