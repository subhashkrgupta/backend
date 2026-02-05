import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { app } from './app.js';

dotenv.config();
const PORT=process.env.PORT || 4000;
const serverStart =async ()=>{
  try {
     await connectDB();
      app.listen(process.env.PORT,()=>{
      console.log(`your server is running on PORT-:${process.env.PORT}`);
   })
  } catch (error) {
    console.log("error occur ",error)
  }
}
serverStart()