// API for accessing users

const express = require("express");
const router = express.Router();

// router
//     .get("/", (req, res) => {
//         res.send("ok!");
//     })
//     .get("/users", (req, res) => {
//         res.send("users!")
//     })

router
    .get("/", (req, res, next) => {
        res.body = "hi";
        next();
    })
    .get("/", (req, res) => {
        res.send(req.body);
    })

module.exports = router;