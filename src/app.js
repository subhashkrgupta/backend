import express from 'express';

const app =express();

app.get('/',(req,res)=>{
    res.send('this is home page')
})




export {app}