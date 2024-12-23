const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
app.use(cors());
const connectToDb=require('./DB/db')
const cookieParser=require('cookie-parser')
const captainRoutes=require('./Routes/captain.routes')

connectToDb();
const userRoutes=require('./Routes/user.routes')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
  res.send("Hello world")
});
app.use('/users',userRoutes);
app.use('/captains',captainRoutes)

module.exports=app;