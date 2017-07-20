var models = require("./Models");
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session = require("express-session");
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

// Requiring passport as we've configured it
var passport = require("passport");
require('./config/passport')(passport)

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "animals are awesome", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session


var testing = require("./db.js");
var testjoin = require("./db2.js");
// Routes
require("./routes/api-delete-routes.js")(app);
require("./routes/api-get-routes.js")(app);
require("./routes/api-post-routes.js")(app);
require("./routes/api-put-routes.js")(app);
require("./routes/html-routes.js")(app);

//Connect to Sequelize and begin server listening
models.sequelize.sync({ force: true }).then(function() {
    app.listen(port, function() {
        console.log('Server successfully connected on PORT %s', port);
        testing().then(testjoin);
        // testjoin();
    });
});