//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require("passport-local").Strategy;

module.exports = function(passport, user) {

    var User = User;


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

    // User Sign Up Strategy
    passport.use('signup', new LocalStrategy(

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
                        first_name: req.body.firstname,
                        last_name: req.body.lastname,
                        email: email,
                        password: userPassword,
                        phone: req.body.phone_p,
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

    //User Sign In Strategy
    passport.use('signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {

            var User = User;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { email: email } }).then(function(user) {

                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }

                if (!isValidPassword(user.password, password)) {

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