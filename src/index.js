import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './db/index.js';

dotenv.config();
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("this is home page")
})

const serverStart = async ()=>{
  try {
     await connectDB()
     app.listen(process.env.PORT,()=>{
      console.log(`your app is running on port-${process.env.PORT}`)
     })
  } catch (error) {
    console.log("error server failed !!",error)
  }
}

serverStart();