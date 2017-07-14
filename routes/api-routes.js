module.exports = function(app){
	var models = require("../")
	// -----------GET ROUTES----------------
	// get User profile
	app.get("/profile/user/:id", function(req, res){
		models.User.findById({
			where:{id:req.params.id}, 
			include: models.Pet
		}).then(function(data){
			res.json(data)
		})
	})

	// get Pet profile
	app.get("/profile/pet/:id", function(req, res){
		models.Pet.findById({
			where:{id:req.params.id}, 
			include: [models.Food, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
		}).then(function(data){
			res.json(data)
		})
	});

	//get Pet Activity
	app.get("/profile/pet/:id", function(req, res){
		models.Pet.findById({
			where:{id:req.params.id}, 
			include: [models.Food, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
		}).then(function(data){
			res.json(data)
		})
	});	 
};