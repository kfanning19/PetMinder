//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });

    //LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({ where: { email: email } }).then(function(user) {

                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        name: req.body.name,
                        email: email,
                        password: userPassword,
                        phone: req.body.phone,
                        image: req.body.image
                    };

                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {

            var User = user;

            var isValidPassword = function(userpass, password) {

                console.log("0");
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { email: email } }).then(function(user) {

                if (!user) {
                    console.log("1");
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }

                if (!isValidPassword(user.password, password)) {
                    console.log("2");

                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, req.flash('loginMessage', 'Oops! Something went wrong'));
            });
        }
    ));
}

