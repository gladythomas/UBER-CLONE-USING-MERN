const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controller');

router.post('/register',[

    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be atleast 3 character long'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 6 character long')
], userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],userController.loginUser)

router.get('/profile',userProfile)



module.exports=router;