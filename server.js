var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// *** Dependencies
// =============================================================
var bodyParser = require("body-parser");
var setupPassport = require('./authentication/passport.js');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var exphbs = require("express-handlebars");
var flash=require("connect-flash");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//Setting up login session
app.use(cookieParser())
app.use(session({ secret: 'bunnyrabbits', resave: false, saveUninitialized: false }))
app.use(flash());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
//Note: Above should do same as:  app.use(express.static("./public")); process.cwd() reads current directory


// Routes =============================================================


// Initialize Passport and restore authentication state, if any, from the
// session.
setupPassport(app);


//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Server running on localhost:${PORT}`);
    });
});
