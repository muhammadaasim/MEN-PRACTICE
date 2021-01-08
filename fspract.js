var fs=require('fs');
fs.readdir('./',function (err,files){
    err ? console.log("Error : ",err) : console.log("Files : ",files);
})