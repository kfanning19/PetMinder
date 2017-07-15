var models= require("../Models")
module.exports= function(app){
	// ------PUT routes-------------
        // update New User
        app.put("/update/user/:id", function(req, res) {
            models.User.update(req.body, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update new Pet
        app.put("/update/pet/:id", function(req, res) {
            models.Pet.update(req.body, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });

        // update activity
        app.put("/update/activity/:id", function(req, res) {
            models.Activity.update(req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update Food
        app.put("/update/Food/:id", function(req, res) {
            models.Food.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update Health
        app.put("/update/Health/:id", function(req, res) {
            models.Health.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update Illness
        app.put("/update/Illness/:id", function(req, res) {
            models.Illness.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update Medications
        app.put("/update/Medication/:id", function(req, res) {
            models.Medications.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });

        // update Message
        app.put("/update/Messages/:id", function(req, res) {
            models.Messages.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
        // update Professional
        app.put("/update/Professional/:id", function(req, res) {
            models.Professional.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
            // update Weight
        app.put("/update/Weight/:id", function(req, res) {
            models.Weight.update({ req.body }, {where:{id: req.params.id}}).then((data)=> {
                    res.json(data);
                });
        });
}