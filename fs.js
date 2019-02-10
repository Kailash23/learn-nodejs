var fs = require("fs");

fs.writeFileSync("./text.txt", "hello world");  // write

var content = fs.readFileSync("./text.txt", "utf-8");
console.log(content);