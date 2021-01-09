const express=require('express');

const app=express();

app.set('port',process.env.PORT || 3001);

app.get('./public',express.static(__dirname+'/public'));

app.get('/',function (req,res){
    res.send('hello world!');
})

app.listen(3001,function(){
    console.log(`Express started no http://localhost:3001`)
});