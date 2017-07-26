var models = require("../Models");
module.exports = function(app) {

    // -----------GET ROUTES----------------
    // get User profile with basic pet information

    app.get("/api/user/profile", function(req, res) {
        models.User.findById(req.user.id, {
            include: models.Pet
        })
        .then(function(data) {
            console.log(data);
            res.json(data);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
    // get Pet profile
    app.get("/api/profile/pet/:id", function(req, res) {
        models.Pet.findOne({
            where: { id: req.params.id },
            include: [models.Activity, models.Diet, models.Messages, models.Contacts, models.User]
        }).then(function(data) {
            res.json(data)
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });

    //get Pet Activity Tab
    app.get("/api/profile/pet/activity/:petId", function(req, res) {
        models.Activity.findAll({
            where: { petId: req.params.petId },
            include: [models.Pet],
            order:[['date', 'DESC']]
        }).then(function(data) {
            res.json(data)
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });

    // get Pet Contacts
    app.get("/api/profile/pet/contacts/:id", function(req, res) {
        models.Contacts.findAll({
            where: { PetId: req.params.id },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // get Pet Diet
    app.get("/api/profile/pet/Diet/:id", function(req, res) {
        models.Diet.findAll({
            where: { PetId: req.params.id },
            include: [models.Pet]
        }).then(function(data) {
            res.json(data);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // get Pet Messages
    app.get("/api/profile/pet/messages/:id", function(req, res) {
        models.Messages.findAll({
            where: { petId: req.params.id },
            include: [models.Pet, models.User],
            order:[['createdAt', 'DESC']]
        }).then(function(data) {
            res.json(data);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // get Pet Settings
    app.get("/api/profile/pet/settings/:id", function(req, res) {
        models.Pet.findById(req.params.id).then(function(pet) {
            pet.getUsers().then(owners => {
                // This is an array of users tied to that pet
                res.json(owners)
            })
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
}