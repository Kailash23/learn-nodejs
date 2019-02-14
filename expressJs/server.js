const express = require("express");

const app = express();

// // 1
// app.get("/", (req, res) => {
//     res.send("hello world");
//     // It will automatically set content type
// })

// app.get("/profile", (req, res) => {
//     var profile = { name: "Kailash" };
//     res.send(profile);
// })


// 2
app.use((req, res, next) => {
        
        // if(req.method === 'GET' && req.url === '/') {
        //     res.send("Hi");
        // } else {
        //     next();
        // }

        var profile = {name : "Will"};
        req.profile = profile;
        next();
    })
    .get("/", (req, res) => {
        res.send("Hello World");
    })
    .get("/profile", (req, res) => {
        res.send(req.profile);
    })

app.listen(3000);