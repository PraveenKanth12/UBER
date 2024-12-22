const userModel=require('../Models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const captainModel = require('../Models/captain.model');

module.exports.authUser=async(req,res,next)=>{
  const token=req.cookies.token || req.authorization?.split(' ')[1];

  if(!token){
    req.status(401).json({message:"Unauthorized"});
  }
  const blacklisted=await userModel.findOne({token:token})
  if(blacklisted){
    res.status(401).json({message:"Unauthorized"});
  }

  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user=await userModel.findById(decoded._id)
    req.user=user;

    return next();
  }catch(err){
    req.status(401).json({message:"Unauthorized"});
  }
}

module.exports.authCaptain=async(req,res,next)=>{
  const token=req.cookies.token || req.authorization?.split(' ')[1];

  if(!token){
    req.status(401).json({message:"Unauthorized"});
  }
  const blacklisted=await captainModel.findOne({token:token})
  if(blacklisted){
    res.status(401).json({message:"Unauthorized"});
  }

  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const captain=await captainModel.findById(decoded._id)
    req.captain=captain;

    return next();
  }catch(err){
    req.status(401).json({message:"Unauthorized"});
  }
}