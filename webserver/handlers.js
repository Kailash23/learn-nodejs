exports.homepage = function(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello World<h1>");
}

exports.profile = function(request, response) {
    var profile = {
        name: "ragnar",
        age: 23
    };

    response.setHeader("Content-Type", "application/json");     // Automatically set values - ExpressJS
    response.end(JSON.stringify(profile));
}

exports.notFound = function (request, response) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end("<h2>404 Not Found!<h2>");
}

