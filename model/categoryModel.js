const mongoose = require('mongoose');

// model of CategoryTable
const catData = new mongoose.Schema({
        categoryName:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        title:{
            type:String,
            required:true,
        },
})

const Category = new mongoose.model('Category',catData);
module.exports = Category
