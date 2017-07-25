var models = require('../Models')
module.exports = function(app) {
    // DELETE route for deleting activities
    app.delete("/api/pet/:petId/activities/:id", function(req, res) {
        models.Activity.destroy({
            where: {
                id: req.params.id,
                PetId: req.params.petId
            }
        }).then(function(activities) {
            res.json(activities);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // DELETE route for deleting contacts
    app.delete("/api/pet/:petId/contacts/:id", function(req, res) {
        models.Contacts.destroy({
            where: {
                id: req.params.id,
                PetId: req.params.petId
            }
        }).then(function(contacts) {
            res.json(contacts);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // DELETE route for deleting Diet
    app.delete("/api/pet/:petId/diet/:id", function(req, res) {
        models.Diet.destroy({
            where: {
                id: req.params.id,
                PetId: req.params.petId
            }
        }).then(function(diet) {
            res.json(diet);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // DELETE route for deleting Messages
    app.delete("/api/pet/:petId/message/:id", function(req, res) {
        models.Messages.destroy({
            where: {
                id: req.params.id,
                PetId: req.params.petId
            }
        }).then(function(message) {
            res.json(message);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
    // Delete pet from user account
    app.delete("/api/pet/:petId/", function(req, res) {
        models.UserPets.destroy({
          where:{
            petId: req.params.petId,
            userId: req.user.id
          }
        }).then(function(results){
          res.json(results)
        }).catch((error) => {
            console.log(error);
            res.status(500);
        });
    });
}