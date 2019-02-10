// console.log(module);

// 1
// module.exports = {
//     a : true
// }


// 2
// module.exports = true

// 3
// exports.a = true;

// if (command === "add") {
//     console.log(a + b);
// } else if (command === "subtract") {
//     console.log(a - b);
// } else if (command === "multiply") {
//     console.log(a * b);
// }

exports.add = function(a, b) {
    return a + b;
}

exports.subtract = function(a, b) {
    return a - b;
} 

exports.multiply = function(a, b) {
    return a * b;
}
