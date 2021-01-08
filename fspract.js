var fs=require('fs');
// fs.readdir('./',function (err,files){
//     err ? console.log("Error : ",err) : console.log("Files : ",files);
// })
function readFile(srcpath){
    fs.readFile(srcpath,'utf8',function (err,data){
        err? console.log("Read Err :",err) : console.log(data);
    })
}

function writeFile(savepath,data){
fs.writeFile(savepath,data,function(err){
    err? console.log("Err : ",err) : console.log("Write Sucessful");
})
}
function appendFile(filepath,data){
    fs.appendFile(filepath,data,function(err){
        err? console.log("Err : ",err) : console.log("Append Sucessful");
    })
    }
readFile("./helloworld.js");
writeFile("./asim.txt","Hello I am asim !");
readFile("./asim.txt");
appendFile("./asim.txt","My caste is soomro & I am developer");
readFile("./asim.txt");
