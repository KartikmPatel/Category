const Category = require('../model/categoryModel');
const News = require('../model/newsModel');
const session = require('express-session');

// Home Page
const showHome =async (req,res) => {
    if (!req.session.username) {
        res.redirect("/login");
    }
    else {
        res.render("index",{
            username: "Welcome " + req.session.username,
            users:req.session.username
        });
    }
    // res.render("index");
}

// Admin page
const showAdmin = async (req,res) => {
    if (!req.session.username) {
        res.redirect("/login");
    }
    else {
        const categoryDetail = await Category.find()
        res.render("Admin", {
            name: "Display",
            users:req.session.username,
            category: categoryDetail,
        });
    }
    // res.render("Admin");
}

// Delete Category
const deleteCategory = async (req,res) => {
    let id = req.params.id;
    const show = await Category.findByIdAndDelete(id)
    res.redirect('/dashboard');
}

// Add Category
const addCategory = async (req,res) => {
    const AddCategory = await new Category({
        categoryName: req.body.cname,
        description: req.body.des,
        title: req.body.title,
    })
    AddCategory.save();
    res.redirect('/dashboard');
}

// Edit Category
const editCategory = async (req,res) => {
    const id = req.params.id;
    console.log(id);
    const updateData = await Category.findByIdAndUpdate(id,{
        category:req.body.category,
        description:req.body.des,
        title:req.body.title
    })
    res.render('Admin');
}

const addNews = async (req,res) => {
    const NewsData =await new News({
        title:req.body.title,
        authorName:req.body.aname,
        description:req.body.des,
        category_id:req.body.categoryName
    })
    NewsData.save();
    res.redirect("/news");
}

const news = async (req,res) => {
    const categoryDetail = await Category.find();
    const newsDetail = await News.find();
    res.render("news",{
        category:categoryDetail,
        news:newsDetail
    })
}

const deleteNews = async (req,res) => {
    let id = req.params.id;
    const show = await News.findByIdAndDelete(id)
    res.redirect('/news');
}

module.exports = {
    showHome,
    showAdmin,
    deleteCategory,
    addCategory,
    editCategory,
    news,
    addNews,
    deleteNews
}