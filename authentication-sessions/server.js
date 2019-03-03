// Sessions allow us to remember a little bit info about user
// in between hitting from one page to another.
// So that we don't have to look up all the information all the time.

// add session as middleware
// Will going to store a cookie for website that will allow
// our user to recognize at every consecutive request.

// secret - unique string used to hash encoding
// Redis - for storing session instead of storing session in memory

// Authentication and Authorization with Node Js
// Authentication - Login - Who the user is?
// Authorization - What user has access to after they logged in?
//      eg : Admin User or Normal User
// Passport Js most popular authentication library

// passport local - Using local DB login based strategy
// Login with Google - OAuth
// Local Strategy - Using local DB

const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./passport");

express()
  .use(
    session({
      secret: "call me juggernaut",
      resave: false,
      saveUninitialized: false
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .get("/", (req, res, next) => {
    res.send(req.session);
  })
  // set a value in session
  .get("/set", (req, res, next) => {
    req.session.name = "Kailash";
    res.send(req.session);
  })
  .listen(3000);
