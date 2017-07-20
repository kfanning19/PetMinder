var models = require("../Models")
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

module.exports = function(app) {
    // ------------POST Routes-------------------
    // Login
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/user/profile");
    });
    // create New User
    app.post("/create/user/", function(req, res) {
        models.User.create(req.body).then(
            function(newUser) {
                res.json(newUser);
            });
    });
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
                models.newOwner.addPet(req.params.id).then((data) => res.json(data))
            } else {
                var random = randomstring.generate();

                models.Caretaker.create({
                    invite_string: random,
                    email: req.params.email,
                    petID: req.params.id,
                    petName: req.params.name,
                    inviter: req.params.first + " " + req.params.last
                }).then((data) => {
                    var mailOptions = {
                        to: data.email,
                        subject: data.PetName + " has been shared with you!",
                        text: "Hi, " + data.Inviter + " has shared a pet with you on PhiloPet! To see this pet profile, go to philopet.com to create an account. Once completed, just click on the Add Pet button on your profile page. At the top of the form, fill in the spot that says 'Add by Code' with the following code: " + data.invite_string + ", then click submit and add it quickly! Note: the code is particular to this email address. It will not work with a different address.",
                        html: "<body><p>Hi, " + data.Inviter + " has shared a pet with you on PhiloPet! To see this pet profile, go to philopet.com to create an account. Once completed, just click on the Add Pet button on your profile page. At the top of the form, fill in the spot that says 'Add by Code' with the following code: " + data.invite_string + ", then click submit and receive it quickly!</p></body>"
                    };
                    smtpTransport.sendMail(mailOptions, function(error, response) {
                        if (error) {
                            console.log(error);
                            res.send("error");
                        } else {
                            console.log("Message sent to: " + data.email);
                            var sendObject = { status: "sent" };
                            console.log("sendObject: ", sendObject)
                            res.send(sendObject);


                        }
                    });
                });
            };
        })
    });
    // add new Owner by String
    app.post("/api/owner/:ownerId/:email/pet/:petID", (req, res) => {
        models.Caretaker.findOne({ where: { email: req.params.email, petID: req.params.petID } }).then((results) => {
            if (results) {
                models.User.findById({ where: { id: req.params.ownerId } }).then((foundUser) => {
                    models.User.addPet(req.params.petId).then((data) => {
                        res.json(data);
                    })
                })
            }
        })
    });
}