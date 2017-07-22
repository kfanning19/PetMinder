var path = require("path");
// Passort
var isLoggedIn = function(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
var models = require("../Models");
var models = require("../Models");
module.exports = function(app) {
    // Login Page
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/profile/user");
        }else{
            res.render("login");
        }
        
    });
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
    // Add a pet Page
    app.get("/add-pet", function(req, res) {
        res.render("addPet");
    });
    // get User profile with basic pet information
    app.get("/profile/user", isLoggedIn,function(req, res) {
        models.User.findById({
            where: { id: req.user.id },
            include: models.Pet
        }).then(function(data) {
            res.render("userProfile", { user: data })
        })
    })

    // get Pet profile
    app.get("/profile/pet/:id", isLoggedIn, function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Activity, models.Diet, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
        }).then(function(data) {
            res.render("petProfile", { pet: data })
        })
    });
    // FAQ page
    app.get("/faq", function(req, res) {
        res.render("faq");
    });

    //About page
    app.get("/about", function(req, res) {
        res.render("about");
    });
    // Forgot Password
    app.get("/forgot-password", function(req, res) {
        res.render("forgot");
    });
    // Sign Up
    app.get("/signup", function(req, res) {
        res.render("signUp");
    })

};