var models= require("./Models");
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var testing = require("./db.js");
var testjoin = require("./db2.js");
// Routes
// require("./routes/api-delete-routes.js")(app);
// require("./routes/api-get-routes.js")(app);
// require("./routes/api-post-routes.js")(app);
// require("./routes/api-put-routes.js")(app);
require("./routes/html-routes.js")(app);

//Connect to Sequelize and begin server listening
models.sequelize.sync({force: true}).then(function(){
	app.listen(port, function(){
		console.log('Server successfully connected on PORT %s', port);
		testing().then(testjoin);
		// testjoin();
	});
});