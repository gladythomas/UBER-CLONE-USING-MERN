const dotenv=require('dotenv');
dotenv.config();
const express=require('express');

const cors=require('cors');
const app=express();
const connectToDB=require('./db/db');
app.use(cors());
connectToDB();



app.get('/',(req,res)=>{res.send('<h1>hello</h1>');});

module.exports=app;

