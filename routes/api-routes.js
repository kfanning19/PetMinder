module.exports = function(app) {
    var models = require("../")
        // -----------GET ROUTES----------------
        // get User profile
    app.get("/profile/user/:id", function(req, res) {
        models.User.findById({
            where: { id: req.params.id },
            include: models.Pet
        }).then(function(data) {
            res.json(data)
        })
    })

    // get Pet profile
    app.get("/profile/pet/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Activity, models.Food, models.Health, models.Illness, models.Medications, models.Messages, models.Professional, models.Weight, models.User]
        }).then(function(data) {
            res.json(data)
        })
    });

    //get Pet Activity Tab
    app.get("/profile/pet/activity/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.User, models.Activity]
        }).then(function(data) {
            res.json(data)
        })
    });

    //get Pet Health information
    app.get("/profile/pet/health/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.User, models.Health, models.Medications, models.Illness, models.Weight]
        }).then(function(data) {
            res.json(data);
        });
    });

    // get Pet Contacts
    app.get("/profile/pet/contacts/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Professional]
        }).then(function(data) {
            res.json(data);
        })
    });
    // get Pet Food
    app.get("/profile/pet/food/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: [models.Food]
        }).then(function(data) {
            res.json(data);
        })
    });
    // get Pet Settings 
    app.get("/profile/pet/settings/:id", function(req, res) {
        models.Pet.findById({
            where: { id: req.params.id },
            include: models.User
        }).then(function(data) {
            res.json(data);
        });
    });

    // ------------POST Routes-------------------
    // create New User
    app.post("/create/user/", function(req, res) {
        models.User.create({ req.body }).then(
            function(newUser) {
                res.json(newUser);
            });
    });
    // create new Pet
    app.post("/create/pet/", function(req, res) {
        models.Pet.create({ req.body }).then(
        	function(newPet) {
        		res.json(newPet);
            });
    });
    // add new Owner
    app.post("/add/owner/:email/:id", function(req, res){
    	models.User.findOne({
    		where: {email:req.params.email}
    	}).then(function(newOwner){
    		if(newOwner){
    			models.User.addPet(req.params.id)
    		}
    	})
    })


};
