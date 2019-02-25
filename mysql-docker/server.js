const express = require("express");
const bodyParser = require("body-parser")
const knex = require("knex")

const db = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        database: "test",
    }
})

express()
    .use(bodyParser.json())
    .get("/", (req, res, next) => {
        db("tweets").then((tweets) => {     // promise
            res.send(tweets);       
        }, next)
    })
    .listen(3000)