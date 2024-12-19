const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
  fullName:{
    firstName:{
      type:String,
      required:true,
      minlength:[3,'First Name must be have three characters long']
    },
    LastName:{
      type:String,
      minlength:[3,'Last Name must be have three characters long']
    }
  },
    Email:{
      type:String,
      required:true,
      unique:true,
      minlength:[3,'Email must be atleast three characters long']
    },
    Password:{
      type:String,
      required:true,
      select:false,
    },
    socketID:{
      type:String
    }
})

userSchema.methods.generateAuthtokeem=function(){
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
  return token
}

userSchema.methods.compare=async function(password){
  return await bcrypt.compare(password, this.password)
}
userSchema.statics.hashPassword=async function(password){
  return await bcrypt.hash(password,10);
}

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;