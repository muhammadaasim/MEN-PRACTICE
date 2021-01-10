const express=require('express');

const app=express();

const log=(req,res,next)=>{
console.log(new Date(),req.method,req.url);
next();
}

const secondMiddleWare=(req,res,next)=>{
console.log('middle ware');
next();
}

app.get('/',log,secondMiddleWare,(req,res)=>{
    res.send("Express works!");
})

app.listen(3001,()=>{

})