console.log("Importing Module.js");
// const average = require("./mod");  // ./ refers to current directory
// console.log(average);
// console.log(average([1,1]));


const mod = require("./mod");  // ./ refers to current directory
// console.log(mod.avg);
console.log(mod.avg([2,2]));
