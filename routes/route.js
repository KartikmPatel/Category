const router = require("express").Router();
const adminController = require('../controller/adminController');
const userController = require('../controller/userController');

// router.use('/logout,/dashboard,/contact',(req,res,next) => {
//     if(req.session.username)
//     {
//         next();
//     }
//     else
//     {
//         res.render("login");
//     }
// })

// All Routes use in website
router.get('/',adminController.showHome);
router.get('/register',userController.showRegister);
router.get('/login',userController.showLogin);
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.get('/dashboard',adminController.showAdmin);
router.get('/delete/:id',adminController.deleteCategory);
router.post('/addCategory',adminController.addCategory);
router.get('/contact',userController.contact);
router.patch('/editCategory/:id',adminController.editCategory);

router.get('/news',adminController.news);
router.post('/addNews',adminController.addNews);
router.get('/deleteNews/:id',adminController.deleteNews);

module.exports = router;
