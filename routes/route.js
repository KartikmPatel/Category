const router = require("express").Router();
const adminController = require('../controller/adminController');
const userController = require('../controller/userController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, res) {
      res(null, 'C:/Users/Kartik Patel/Desktop/sem-7/Node/mongo/public/upload') // The destination folder where the image will be stored
    },
    filename: function (req, file, res) {
    console.log(file);
      res(null, Date.now() + '-' + path.extname(file.originalname)); // Renaming the file to avoid conflicts
    }
  });
  const upload = multer({ storage: storage });
  
  // Set up a route to handle image uploads
//   router.post('/upload', upload.single('image'), adminController.uploadImage);

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
router.post('/addNews',upload.single('image'),adminController.addNews);
router.get('/deleteNews/:id',adminController.deleteNews);

module.exports = router;
