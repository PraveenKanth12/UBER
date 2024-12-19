const express = require('express');
const routes= express.Router();
const {body}=require("express-validator")

router.post('/register',[
  body('email').isEmail().withMessage('Please enter valid mail'),
  body('fullname.firstname').isFullname().withMessage('firstname must be a 3 character long'),
  body('fullname.lastname').isFullname().withMessage('lastname must be a 3 character long'),
  body('password').isLength({min:6}).withMessage('password must be at least 6 characters'),
])


module.exports =routes;