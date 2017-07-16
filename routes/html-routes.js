var models = require("../Models");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("login");
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

    //get Pet Activity Tab
    app.get("/profile/pet/activity/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.User, models.Activity]
        }).then(function(data) {
            res.render("activity", {activity: data})
        })
    });

    //get Pet Health information
    app.get("/profile/pet/health/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.User, models.Health, models.Medications, models.Illness, models.Weight]
        }).then(function(data) {
            res.render("health",{ health: data});
        });
    });

    // get Pet Contacts
    app.get("/profile/pet/contacts/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Professional]
        }).then(function(data) {
            res.render("contacts", {contacts: data});
        })
    });
    // get Pet Diet
    app.get("/profile/pet/diet/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Diet]
        }).then(function(data) {
            res.render("diet", {diet: data});
        })
    });
    // get Pet Settings 
    app.get("/profile/pet/settings/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: models.User
        }).then(function(data) {
            res.render("settings", {settings: data});
        });
    });


};
