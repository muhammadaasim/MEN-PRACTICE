var http=require('http');
var courses=[{id:1,name:'JS'},{id:2,name:'Node'}]
var users=['userA','userB'];

var server=http.createServer(function (request,response){
    console.log("Got request",request);
    response.write("Hello World !")
});
server.listen(3001);