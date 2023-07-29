const mongoose = require('mongoose');

// model of News
const newsData = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    authorName: {
        type:String,
        required:true,
    },
    description: {
        type:String,
    },
    // image: {
    //     type: String,
    //     required:true,
    // },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
    }
});

const News = new mongoose.model('News',newsData);
module.exports = News
