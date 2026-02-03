import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constants.js';

dotenv.config();

export const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log("errro occure when db connection failed!",error)
    }
}