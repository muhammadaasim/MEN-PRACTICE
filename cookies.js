const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res)=>{
res.cookie('myFirst Cookie');
res.send('Cookies...');
});


app.listen(3001,()=>{
    console.log('Express server is started at localhost:3001')
})