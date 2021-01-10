const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.set('port',process.env.PORT || 3001);


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}))


//Making public folder as static so that everyone can visit without restrictation
app.get('./public',express.static(__dirname+'/public'));


//POST

app.post('/',(req,res)=>{
    res.end(JSON.stringify(req.body))
})


//Get Request html file response

app.get('/',function (req,res){
    // res.send('hello world!');
    // res.sendFile(__dirname+'/public/index.html')
    res.send(JSON.stringify(req.body));
});


// Get request with JSON Response

app.get('/users',function (req,res){
   res.json([{id:1,name:"aasim",caste:'soomro'},{id:2,name:'mohsin',caste:'soomro'}]);
})

app.listen(3001,function(){
    console.log(`Express started at http://localhost:3001`)
});