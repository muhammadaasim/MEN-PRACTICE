const os=require('os');

var totalMemory=os.totalmem();
var fm=os.freemem();

console.log("Total Memory",totalMemory);
console.log("free Memory",fm);