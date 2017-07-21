var models = require("../Models");
module.exports = function(app) {

    // -----------GET ROUTES----------------
    // get User profile with basic pet information
    app.get("/api/user/profile", function(req, res) {
        if (!req.user) {
            res.json({});
        } else {

            models.User.findById({
                where: { id: req.user.id },
                include: models.Pet
            }).then(function(data) {
                res.json(data)
            })
        }
    });
    // get Pet profile
    app.get("/api/profile/pet/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Activity, models.Diet, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
        }).then(function(data) {
            res.json(data)
        })
    });

    //get Pet Activity Tab
    app.get("/api/profile/pet/activity/:petId", function(req, res) {
        models.Activity.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet],
        }).then(function(data) {
            res.json(data)
        })
    });

    //get Pet Health information
    app.get("/api/profile/pet/health/:petId", function(req, res) {
        models.Health.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        });
    });

    // get Weight Information
    app.get("/api/profile/pet/weight/:petId", function(req, res) {
        models.Weight.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        });
    });
    // get Medications Information
    app.get("/api/profile/pet/medications/:petId", function(req, res) {
        models.Medications.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        });
    });

    // get Pet Contacts
    app.get("/api/profile/pet/contacts/:id", function(req, res) {
        models.Professional.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        })
    });
    // get Pet Diet
    app.get("/api/profile/pet/Diet/:id", function(req, res) {
        models.Diet.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        })
    });
    // get Pet Settings 
    app.get("/api/profile/pet/settings/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: models.User
        }).then(function(data) {
            res.json(data);
        });
    });
}