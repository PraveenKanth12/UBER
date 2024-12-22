const mongoose=require('mongoose');
const { isLowercase } = require('validator');

const captainSchema=new mongoose.Schema({
  fullName:{
    firstName:{
      type:String,
      required:true,
      minlength:[3,"Firstname should be atleast 3 characters long"]
    },
    lastName:{
      type:String,
      required:true,
      minlength:[3,"Lastname should be atleast 3 characters long"]
    }
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    //match
  },
  password:{
    type:String,
    required:true,
    select:false,
  },
  socketId:{
    type:String
  },
  status:{
    type:String,
    enum:["active","inactive"],
    default:"inactive",
  },
  vehicle:{
    color:{
      type:String,
      required:true,
      minlength:[2,"Color should be atleast 2 character length"]
    },
    numberplate:{
      type:String,
      required:true,
      minlength:[3,"Numberplate should be atleast 3 character long"]
    },
    capacity:{
      type:Number,
      required:true,
      min:[1,"Capacity must be atlleast 1"]
    },
    vehicletype:{
      type:String,
      required:true,
      enum:['bike','car','auto']
    },
    location:{
      lat:{
        type:String
      },
      log:{
        type:String
      }
    }

  }
})

captainSchema.methods.generateAuthToken=function(){
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
  return token
}

captainSchema.methods.comparePassword=async function(password){
  return await bcrypt.compare(password, this.password)
}
captainSchema.statics.hashPassword=async function(password){
  return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel;