// using builtin modules of nodejs  


const fs = require("fs");// importing file system module
let text = fs.readFileSync("Rough.txt","utf8");
console.log(text);
text = text.replace("Jasmeet","rubal"); // will change only thr first occurance of the string 
console.log(text);
console.log("Creating a new file...");
fs.writeFileSync("Rough1.txt",text);