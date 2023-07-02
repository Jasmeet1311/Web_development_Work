console.log("This is module.js");
function average(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum+arr[i];
    }
    let avg = sum /arr.length;
    return avg;
}
console.log("Avg in mod.js",average([1,1]));
// module.exports = average;    // Exporting a single function

//  To export multiple functions use obj
module.exports = {       // module.exports is an object itself
    avg: average,
    name: "Harry",
    repo: "GitHub"
}