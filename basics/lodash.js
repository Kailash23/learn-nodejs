var _ = require("lodash");
var axios = require("axios");


// Get request using axios
axios.get("http://rest.learncode.academy/api/myuser/friends").then ((res) => {
    var jake = _.find(res.data, {name: "Jake"});        // (from where, what to search) from json
    console.log(jake);
});

console.log(_.snakeCase("someValue"));

// npm install or npm i -> for installing all dependencies from package.json

// npm install axios - Make http req extremely easy.

// npm install --save axios -> save flag to add dependencies to package.json
// npm install -S axios
// npm i -S axios

// npm is the best thing about node js, tremendous community support.
// write code extremely quickly.
// which module to use for which situation.

// npm install --save-dev mocha   for unit testing  (install locally)
// we don't want to install in production deployment.
// devDependencies is used for that - used just for local development
// npm install -> will install both dependencies both devDependencies and dependencies.
// npm install --production  -> in dependencies (Production build and deployment are lighter)
// like mocha -> task runner & test runner

