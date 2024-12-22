const { compare } = require('bcrypt');
const captainModel=require('../Models/captain.model')
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator');

module.exports.registerCaptain=async(req,res,next)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  const {fullName,email,password,vehicle}=req.body;
  const isCaptainAlreadyExist=await captainModel.findOne({email});
  if(isCaptainAlreadyExist){
    res.status(400).json({message:'Captain already exists'})
  }
  const hashedPassword=await captainModel.hashPassword(password)

  const captain=captainService.createCaptain({
    firstName:fullName.firstName,
    lastName:fullName.lastName,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicletype:vehicle.vehicletype
  });
  const token=captain.generateAuthToken();

  res.status(201).json({token,captain});
}

module.exports.loginCaptain=async(req,res,next)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  const {email,password}=req.body;
  const findEmail=await captainModel.findOne({email}).select('+password')
  if(!findEmail){
    res.status(401).json({message:"Invalid Captain or Password"})
  }
  const isMatch=await findEmail.comparePassword(password)
  if(!isMatch){
    res.status(401).json({message:"Unauthorized Captain"})
  }

  const token=findEmail.generateAuthToken();

  req.cookies('token',token);
  res.status(200).json({token,findEmail});

}
module.exports.getCaptainProfile=async(req,res,next)=>{
  res.status(200).json({captain:req.captain});
};

module.exports.logoutCaptain=async(req,res,next)=>{
  res.clearcookies();
    const token=req.cookies.token || req.authorization.split(' ')[1];
    await blacklistTokenModel.create({token})
  
    res.status(200).json({message:'Logged out'})
}
