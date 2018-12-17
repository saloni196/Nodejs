var fs = require("fs");
var data = fs.readFileSync('data.csv');

console.log(data.toString());
console.log("Program Ended");
