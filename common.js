// Import files using CommonJS module
var math = require("./math");   

// console.log(math);

// // 1
// console.log(process.argv);

// // 2
// console.log(process.env.A);
// Run : A=2 node app

// // 3
// var a = Number(process.argv[2]);
// var b = Number(process.argv[3]);

// setInterval(function () {
//     console.log(a + b);
// }, 2000);

// 4
var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

var value = math[command](a,b);

console.log(value);


// node app multiply 2 3

// console.log(module);