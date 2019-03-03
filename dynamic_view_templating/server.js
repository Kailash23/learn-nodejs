// Dynamic view templating with expressjs

// GET /users get all users
// GET /user/:id get single user
// POST /users create users
// PUT /users/:id update user
// DELETE /users/:id delete user

const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");

const staticAssets = "./public";

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "test"
  }
});

express()
  .use(bodyParser.json())
  .set("view engine", "hjs")
  .use(express.static(staticAssets))

  .get("/", (req, res, next) => {
    db("users").then(users => {
      res.render("users", {
        title: "All Users",
        users
      });
    });
  })

  .get("/viewtweets/:user_id", (req, res, next) => {
    const { user_id } = req.params;

    db("tweets")
      .where("user_id", user_id)
      .then(tweets => {
        res.render("tweets", {
          title: "My Users Tweets",
          tweets
        });
      });
  })
  .listen(3000);

// Will take data from database and generate html doc
// from it in real-time.
// Rest api to use json info from database
