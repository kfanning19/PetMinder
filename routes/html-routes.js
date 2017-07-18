var models = require("../Models");
module.exports = function(app) {
    // Login Page
    app.get("/", function(req, res) {
        res.render("login");
    });
        // Add a pet Page
    app.get("/add-pet", function(req, res) {
        res.render("addPet");
    });
    // get User profile with basic pet information
    app.get("/profile/user/:id", function(req, res) {
        models.User.findById({
            where: { id: req.params.id },
            include: models.Pet
        }).then(function(data) {
            res.render("userProfile", {user: data})
        })
    })

    // get Pet profile
    app.get("/profile/pet/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Activity, models.Diet, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
        }).then(function(data) {
            res.render("petProfile", {pet: data})
        })
    });
    // FAQ page
    app.get("/faq", function (req, res){
        res.render("faq");
    });

    //About page
    app.get("/about", function(req, res){
        res.render("about");
    });
    // Forgot Password
    app.get("/forgot-password", function(req, res){
        res.render("forgot");
    });
    // Sign Up
    app.get("/signup", function(req, res){
        res.render("signUp");
    })    

};
