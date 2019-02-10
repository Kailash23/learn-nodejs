var fs = require("fs");

fs.writeFileSync("./basics/text.txt", "hello world");  // write

var content = fs.readFileSync("./basics/text.txt", "utf-8");
console.log(content);