var models = require("../Models");
var randomstring = require("randomstring");
var nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: 'philopetapp@gmail.com',
        pass: 'weLovePets0117'
    }
});

module.exports = function(app, passport) {
    // ------------POST Routes-------------------
    // Login
    app.post("/login", passport.authenticate("signin", {
        successRedirect: '/user/profile',
        failureRedirect: '/',
        failureFlash: true
    }));
    // create New User
    app.post("/create/user/", passport.authenticate("signup", {
        successRedirect: '/user/profile',
        failureRedirect: '/',
        failureFlash: true
    }));
    // create new Pet
    app.post("/create/pet/", function(req, res) {
        models.Pet.create(req.body).then(
            (newPet) => {
                res.json(newPet);
            });
    });

    // add activity
    app.post("/add/activity/", function(req, res) {
        models.Activity.create(req.body).then(
            (newActivity) => {
                res.json(newActivity);
            });
    });
    // add Diet
    app.post("/add/Diet/", function(req, res) {
        models.Diet.create(req.body).then(
            (newDiet) => {
                res.json(newDiet);
            });
    });
    // add Health
    app.post("/add/Health/", function(req, res) {
        models.Health.create(req.body).then(
            (newHealth) => {
                res.json(newHealth);
            });
    });
    // add Illness
    app.post("/add/Illness/", function(req, res) {
        models.Illness.create(req.body).then(
            (newIllness) => {
                res.json(newIllness);
            });
    });
    // add Medication
    app.post("/add/Medication/", function(req, res) {
        models.Medications.create(req.body).then(
            (newMed) => {
                res.json(newMed);
            });
    });

    // add Message
    app.post("/add/Messages/", function(req, res) {
        models.Messages.create(req.body).then(
            (newMess) => {
                res.json(newMess);
            });
    });
    // add Professional
    app.post("/add/Professional/", function(req, res) {
        models.Professional.create(req.body).then(
            (newProf) => {
                res.json(newProf);
            });
    });
    // add Weight
    app.post("/add/Weight/", function(req, res) {
        models.Weight.create(req.body).then(
            (newlbs) => {
                res.json(newlbs);
            });
    });
    // add new Owner
    app.post("/add/owner/:email/:id/:name/:first/:last", function(req, res) {
        models.User.findOne({
            where: { email: req.params.email }
        }).then((newOwner) => {
            if (newOwner) {
               return newOwner.addPet(req.params.id).then((data) => {res.json(data)})
            }
            else {
                // TOOO: Return an error message indicating the user was not found
            };
        })
    });
}