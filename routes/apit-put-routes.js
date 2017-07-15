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
            models.Health.update({ req.body }).then(
                (newHealth)=> {
                    res.json(newHealth);
                });
        });
        // add Illness
        app.post("/add/Illness/", function(req, res) {
            models.Illness.create({ req.body }).then(
                (newIllness)=> {
                    res.json(newIllness);
                });
        });
        // add Medication
        app.post("/add/Medication/", function(req, res) {
            models.Medications.create({ req.body }).then(
                (newMed)=> {
                    res.json(newMed);
                });
        });

        // add Message
        app.post("/add/Messages/", function(req, res) {
            models.Messages.create({ req.body }).then(
                (newMess)=> {
                    res.json(newMess);
                });
        });
        // add Professional
        app.post("/add/Professional/", function(req, res) {
            models.Professional.create({ req.body }).then(
                (newProf)=> {
                    res.json(newProf);
                });
        });
            // add Weight
        app.post("/add/Weight/", function(req, res) {
            models.Weight.create({ req.body }).then(
                (newlbs)=> {
                    res.json(newlbs);
                });
        });
}