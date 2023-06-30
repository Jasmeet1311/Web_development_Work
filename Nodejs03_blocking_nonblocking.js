//  Synchronous and asynchronous execution
// Synchronous or blocking execution
// -line by line execution
// let text = fs.readFileSync("Rough.txt","utf8");
// console.log(text);
// Asynchrounous or non blocking execution
// - callbacks will fire

const fs = require("fs");
fs.readFile("Rough.txt","utf-8",(err,data)=>{
    console.log(err,data);// call back fn will execute only after successfully reading the file
})

console.log("This is a message");