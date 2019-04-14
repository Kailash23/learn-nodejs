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
// var command = process.argv[2];
// var a = Number(process.argv[3]);
// var b = Number(process.argv[4]);

// var value = math[command](a,b);

// console.log(value);

// node app multiply 2 3

// console.log(module);

var value = math.add(5, 6);
console.log(value);

// run script - npm test

// Creating dev command - live reload -> node run dev (start and test standard command)
//  npm run - lets find custom name script

// dev - development mode - It watch the file system for changes
// whenever you hit save it will automatically re run whatever I am telling
// nodemon to run.

// local development environment - nodemon

// npm run dev - used for development locally.
// npm start - when you want to see production mode on that application.
//           - when you are deploying app to production.
