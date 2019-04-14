// npm init -y
// npm i --save-dev nodemon

// import built in nodejs module for http
var http = require("http");
var handlers = require("./handlers");

// create server
var server = http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;

  if (url === "/") {
    handlers.homepage(request, response);
  } else if (url === "/profile") {
    handlers.profile(request, response);
  } else {
    handlers.notFound(request, response);
  }
});

server.listen(3000);

// Apache and ngnix -> web server (PHP application)
// PHP file top to bottom and split out web page.

// NodeJS - receives and decide at real time what to do.
// Basic nodeJS web server, server will stay open forever
