const bcrypt = require("bcrypt-nodejs");
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(authenticate));

function authenticate(email, password, done) {
  db("users")
    .where("email", email)
    .first()
    .then(user => {
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, {
          message: "Invalid email and password combination!"
        });
      }
      done(null, user);
    }, done);
  // Since we are using promises
  // 1st func - success 2nd func - error

  // OR
  // .catch(err => {
  //    done(err)
  // })
}

// done(null, false, {message: "Ahh this didn't work!"})
// 1st - System level Error
// 2nd - Boolean - user's email or password

// Session - set the user on session

// Serialize User - Takes a full user object and it's gonna determine what we sat
// with the hash onto the cookie that goes into browser, we are not going to store
// whole user into cookie we just want to store enough info to identify user and
// refetch that user.

// Lets add user id to session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// To fetch the whole user with user id
// User has logged in with user id stored in a cookie in their
// session on local machine.
// This gonna make next request, deserializeUser gets called pulls
// the id in the cookie and populate the full user object

// Then every page request is made we are going to use forward slash
// for that, and passport will deserialize the user and fetch the user
// by id from database. And then after getting user populate the full user.
passport.deserializeUser(function(id, done) {
  db("users")
    .where("id", id)
    .first()
    .then(user => {
      done(null, user);
    }, done);
});
