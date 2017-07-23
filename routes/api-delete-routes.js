var models = require('../Models')
module.exports=function (app) {
	  // DELETE route for deleting activities
  app.delete("/api/pet/activities/:id", function(req, res) {
    models.Activity.destroy({
      where:{
        id: req.params.id
      }
    }).then(function(activities){
      res.json(activities);
    })
  });
  	  // DELETE route for deleting contacts
  app.delete("/api/pet/contacts/:id", function(req, res) {
    models.Professional.destroy({
      where:{
        id: req.params.id
      }
    }).then(function(contacts){
      res.json(contacts);
    })
  });
    	  // DELETE route for deleting Diet
  app.delete("/api/pet/diet/:id", function(req, res) {
    models.Diet.destroy({
      where:{
        id: req.params.id
      }
    }).then(function(diet){
      res.json(diet);
    })
  });
      	  // DELETE route for deleting Messages
  app.delete("/api/pet/message/:id", function(req, res) {
    models.Messages.destroy({
      where:{
        id: req.params.id
      }
    }).then(function(message){
      res.json(message);
    })
  });
  // Delete pet from user account
  app.delete("/api/pet/:petId/petOwner/:userId", function(req, res) {
    models.Pet.findOne({
      where:{
        id: req.params.petId
      }
    }).then(function(pet){
      models.User.findOne({
      	where:{
      		id: req.params.petId
      	}
      }).then(owner =>{
      	pet.removeUser(owner).then(result=>{
      		res.json(result)
      	})
      })
    })
  });
}