const captainModel=require('../Models/captain.model');

module.exports.createCaptain=async({
  firstName,lastName,email,password,color,plate,capacity,vehicletype
})=>{
  if(  !firstName || !lastName || !email || !password || !color || !plate || !capacity || !vehicletype){
    throw new Error('All fiels are required')
  }
  const captain=captainModel.create({
    fullname:{
      firstName,
      lastName,

    },
    email,
    password,
    vehicle:{
      color,
      plate,
      capacity,
      vehicletype
    }
  })
  return captain;
}  