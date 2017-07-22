var path = require("path");
// Passort
var isLoggedIn = function (req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
var models = require("../Models");
module.exports = function(app) {
    // Login Page
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/user/profile");
        }
        res.sendFile(path.join(__dirname, "../views/login.html"));;
    });
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // Add a pet Page
    app.get("/add-pet", isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, "../views/addPet.html"));;
    });
<<<<<<< HEAD
    // get User profile with basic pet information
    app.get("/profile/user", isLoggedIn,function(req, res) {
        models.User.findById({
            where: { id: req.user.id },
            include: models.Pet
        }).then(function(data) {
            res.render("userProfile", { user: data })
        })
=======
    // get User profile
    app.get("/user/profile", isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, "../views/userProfile.html"))
>>>>>>> 7b876aec42636bf840c4406bc9600d39917ec776
    })

    // get Pet profile
    app.get("/profile/pet/:id", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/petProfile.html"));
    });
    // FAQ page
    app.get("/faq", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/faq.html"));
    });

    //About page
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/about.html"));
    });
    // Forgot Password
    app.get("/forgot-password", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/forgot.html"));
    });
    // Sign Up
    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/signUp.html"));
    })

};