const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const connectToDb=require('./DB/db')

connectToDb();


app.get('/',(req,res)=>{
  res.send("Hello world")
});

module.exports=app;