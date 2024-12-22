const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const connectToDb=require('./DB/db')
const cookieParser=require('cookie-parser')

connectToDb();
const userRoutes=require('./Routes/user.routes')
const captainRouter=require('./Routes/captain.routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
  res.send("Hello world")
});
app.use('/users',userRoutes);
app.use('/captains',captainRouter)

module.exports=app;