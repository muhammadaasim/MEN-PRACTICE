const path=require('path');

 
console.log('__filename',__filename)
console.log("directory :",__dirname)
var pathObj=path.parse(__filename);
console.log('pathobj :',pathObj)