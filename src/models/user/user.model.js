import mongoose from 'mongoose';

const userSchema =mongoose.Schema(
    {
        user:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:Number,
            required:true,
            unique:true,
            default:0
        },
        gender:{
            type:String,
            required:true,
            enum:["Male","Female","Other"],
        },
        password:{
            type:String,
            required:true,
            unique:true,
        }
    },
    
    {timestapms:true}
)

export const User= mongoose.model("User",userSchema)