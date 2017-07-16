var models = require("../Models");
module.exports= function(app){
	        
            // -----------GET ROUTES----------------
            // get User profile with basic pet information
        app.get("/api/profile/user/:id", function(req, res) {
            models.User.findById({
                where: { id: req.params.id },
                include: models.Pet
            }).then(function(data) {
                res.json(data)
            })
        })

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
        app.get("/api/profile/pet/activity/:id", function(req, res) {
            models.Pet.findById({
                where: { id: req.params.id },
                include: [models.User, models.Activity]
            }).then(function(data) {
                res.json(data)
            })
        });

        //get Pet Health information
        app.get("/api/profile/pet/health/:id", function(req, res) {
            models.Pet.findById({
                where: { id: req.params.id },
                include: [models.User, models.Health, models.Medications, models.Illness, models.Weight]
            }).then(function(data) {
                res.json(data);
            });
        });

        // get Pet Contacts
        app.get("/api/profile/pet/contacts/:id", function(req, res) {
            models.Pet.findById({
                where: { id: req.params.id },
                include: [models.Professional]
            }).then(function(data) {
                res.json(data);
            })
        });
        // get Pet Diet
        app.get("/api/profile/pet/Diet/:id", function(req, res) {
            models.Pet.findById({
                where: { id: req.params.id },
                include: [models.Diet]
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