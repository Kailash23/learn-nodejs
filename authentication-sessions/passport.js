const knex = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(authentication));

function authentication(email, password, done) {
  db("users")
    .where("email", email)
    .first()
    .then(user => {
      if (!user || user.password !== password) {
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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// To fetch the whole user with user id
// User has logged in with user id stored in a cookie in their
// session on local machine.
// This gonna make next request, deserializeUser gets called pulls
// the id in the cookie and populate the full user object

passport.deserializeUser(function(id, done) {
  db("users")
    .where("id", id)
    .first()
    .then(user => {
      done(null, user);
    }, done);
});
