var randomstring = require("randomstring");
var nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com"
    auth: {
        user: 'philopet@gmail.com',
        pass: 'weLovePets0117'
    }
});

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
                (newPet)=> {
                    res.json(newPet);
                });
        });

        // add activity
        app.post("/add/activity/", function(req, res) {
            models.Activity.create({ req.body }).then(
                (newActivity)=> {
                    res.json(newActivity);
                });
        });
        // add Food
        app.post("/add/Food/", function(req, res) {
            models.Food.create({ req.body }).then(
                (newFood)=> {
                    res.json(newFood);
                });
        });
        // add Health
        app.post("/add/Health/", function(req, res) {
            models.Health.create({ req.body }).then(
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
        // add new Owner
        app.post("/add/owner/:email/:id/:name/:first/:last", function(req, res) {
                    models.User.findOne({
                        where: { email: req.params.email }
                    }).then((newOwner) => {
                        if (newOwner) {
                            models.User.addPet(req.params.id).then((data) => res.json(data))
                        } else {
                            var random = randomstring.generate();
                            // TODO add email
                            models.Caretaker.create({
                                invite_string: random,
                                email: req.params.email,
                                petID: req.params.id,
                                petName: req.params.name,
                                inviter: req.params.first + " " + req.params.last
                            }).then((data) =>
                                var mailOptions = {
                                    to: data.email,
                                    subject: data.PetName + " has been shared with you!",
                                    text: "Hi, " + data.Inviter + " has shared a pet with you on PhiloPet! To see this pet profile, go to philopet.com to create an account. Once completed, just click on the Add Pet button on your profile page. At the top of the form, fill in the spot that says 'Add by Code' with the following code: " + data.invite_string + ", then click submit and it will be added for you!"
                                    html: "<p>Hi, " + data.Inviter + " has shared a pet with you on PhiloPet! To see this pet profile, go to philopet.com to create an account. Once completed, just click on the Add Pet button on your profile page. At the top of the form, fill in the spot that says 'Add by Code' with the following code: " + data.invite_string + ", then click submit and it will be added for you!</p>"
                                }; smtpTransport.sendMail(mailOptions, function(error, response) {
                                        if (error) {
                                            console.log(error);
                                            res.send("error");
                                        } else {
                                            console.log("Message sent to: " + data.email);
                                            var sendObject = { status: "sent" };
                                            console.log("sendObject: ", sendObject)
                                            res.send(sendObject);

                                        )
                                    }
                                });
                        }
                    });
                };
                // add new Owner by String
                app.post("/api/owner/:ownerId/:email/pet/:petID", (req, res) => {
                    models.Caretaker.findOne({ where: { email: req.params.email, petID: req.params.petID } }).then((results) =>
                        if (results) {
                            models.User.findById({ where: { id: req.params.ownerId } }).then((foundUser) =>
                                models.User.addPet(req.params.petId).then((data) => res.json(data)))
                        });
                });
