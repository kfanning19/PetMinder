var models = require("../Models");
module.exports = function(app) {
    // Login Page
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/views/index.html");
    });
    // Add a pet Page
    app.get("/add-pet", function(req, res) {
        res.sendFile(__dirname + "/views/addPet.html");
    });
    // get User profile
    app.get("/user/profile", function(req, res) {
      res.sendFile(__dirname + "/views/userProfile.html")  
    })

    // get Pet profile
    app.get("/profile/pet/:id", function(req, res) {
        res.sendFile(__dirname + "/views/petProfile.html")
    });
    // FAQ page
    app.get("/faq", function(req, res) {
        res.sendFile(__dirname + "/views/faq.html")
    });

    //About page
    app.get("/about", function(req, res) {
        res.sendFile(__dirname + "/views/about.html")
    });
    // Forgot Password
    app.get("/forgot-password", function(req, res) {
        res.sendFile(__dirname + "/views/forgot.html")
    });
    // Sign Up
    app.get("/signup", function(req, res) {
        res.sendFile(__dirname + "/views/signup.html")
    })

};