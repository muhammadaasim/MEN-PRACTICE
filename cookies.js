const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res)=>{
res.cookie('myFirstCookie','sent_by_Aasim');
res.send('Cookies...');
});

app.get('/clear',  (req,res)=>{
res.clearCookie('myFirstCookie');
res.send("Cookies Cleared");
})

app.listen(3001,()=>{
    console.log('Express server is started at localhost:3001')
})