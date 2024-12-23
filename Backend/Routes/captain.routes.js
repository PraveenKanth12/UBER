const express=require('express');
const routes=express.Router();
const {body}=require("express-validator")
const captainController=require('../Controller/captain.controller');
const captainMiddleware=require('../Middlewares/auth.middleware')

routes.post('/register',[
  body('email').isEmail().withMessage('Invalid email'),
  body('fullName.firstName')
  .isLength({ min: 3 })
  .withMessage('First name must be at least 3 characters long'),
  body('password').isLength({min:3}).withMessage('Password msut be at least 3 characters long'),
  body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 2 characters long'),
  body("vehicle.plate").isLength({min:3}).withMessage('Plate must be at least 3 charcteer long'),
  body('vehicle.vehicetype').isIn(['car','bike','auto']).withMessage('Invalid vehicletype')
],captainController.registerCaptain);

routes.post('/login',[
  body('email').isEmail().withMessage('Please enter valid mail'),
  body('password').isLength({min:3}).withMessage('password must be at least 3 characters'),
],captainController.loginCaptain);

routes.get('/profile',captainMiddleware.authCaptain,captainController.getProfileCaptain);

routes.get('/logout',captainMiddleware.authCaptain,captainController.logoutCaptain);

module.exports=captainRoutes;