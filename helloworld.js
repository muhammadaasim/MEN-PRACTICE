const express=require('express');

const app=express();

app.set('port',process.env.PORT || 3001);

app.get('./public',express.static(__dirname+'/public'));

app.get('/',function (req,res){
    // res.send('hello world!');
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/users',function (req,res){
   res.json([{id:1,name:"aasim",caste:'soomro'},{id:2,name:'mohsin',caste:'soomro'}]);
})

app.listen(3001,function(){
    console.log(`Express started no http://localhost:3001`)
});