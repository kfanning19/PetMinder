//load bcrypt
var passport = require("passport");
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, User) {
    var LocalStrategy = require('passport-local').Strategy;

    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then((user) => {
                done(null, user);
            })
            .catch(done);
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',

            // Adds the request object as the first parameter below
            passReqToCallback: true
        },

        function(req, email, password, done) {
            User.findOne({ where: { email: email } })
                .then(function(user) {
                    if (!user) {
                        console.log("User not found!");
                        return done(null, false, { 'loginMessage': 'No user found.' });
                    }
                    if (!isValidPassword(user.password, password)) {
                        console.log("Invalid password!");
                        return done(null, false, { 'loginMessage': 'Oops! Wrong password.' });
                    }
                    var userinfo = user.get();
                    return done(null, userinfo);
                })
                .catch(function(err) {
                    console.log("Error:", err);
                    return done(null, false, { 'loginMessage': 'Oops! Something went wrong' });
                });
        }
    ));

    function isValidPassword(userpass, password) {
        return bCrypt.compareSync(password, userpass);
    }
}

