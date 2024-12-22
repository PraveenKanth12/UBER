const express = require('express');
const routes= express.Router();
const {body}=require("express-validator")
const userController=require('../Controller/user.controller');
const userMiddleware=require('../Middlewares/auth.middleware');

routes.post('/register',[
  body('email').isEmail().withMessage('Please enter valid mail'),
  body('fullname.firstname').isLength({min:3}).withMessage('firstname must be a 3 character long'),
  body('password').isLength({min:6}).withMessage('password must be at least 6 characters'),
],userController.registerUser)

routes.post('/login',[
  body('email').isEmail().withMessage('Please enter valid mail'),
  body('password').isLength({min:6}).withMessage('password must be at least 6 characters'),
],userController.loginUser)

routes.get('/profile',userMiddleware.authUser,userController.getUserProfile)
routes.get('/logout',userMiddleware.authUser,userController.logoutUser);


module.exports =routes;