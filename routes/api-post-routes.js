var models = require("../Models");
var randomstring = require("randomstring");
var nodemailer = require("nodemailer");
var bCrypt = require('bcrypt-nodejs');

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
    app.post("/login",
        passport.authenticate("local", { failureRedirect: '/' }),
        function(req, res) {
            res.redirect('/');
        });

    // create New User
    app.post("/signup", function(req, res) {
        var formData = req.body;
        models.User.findOne({ where: { email: formData.email } })
            .then(function(user) {
                if (user) {
                    // A User with this email already exists
                    // TODO: Display appropriate error message
                }
                else {
                    formData.password = generateHash(formData.password);
                    models.User.create(formData)
                        .then(function(newUser) {
                            res.redirect("/");
                        })
                        .catch((error) => {
                            console.log(error);
                            res.status(500);
                        });
                }
            });

        function generateHash(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        }
    });

////////////////TODO  TEST create pet!////////////////////
    // create new Pet
    // app.post("/create/pet", function(req, res) {
    //     models.Pet.create(req.body).then(
    //         (newPet) => {
    //             models.User.findOne({
    //                 where: {id : req.user.id}
    //             }).then((newOwner)) => {
    //                 if (newOwner) {
    //                     console.log(newOwner)
    //                     return newOwner.addPet(newPet).then((data) => {res.json (data) })
    //                 } else {
    //                     res.send("Pet could not be added.") 
    //             };
    //         })
    //     })
    // });

    // create new Pet
    app.post("/create/pet", function(req, res) {
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

    // add Message
    app.post("/add/Messages/", function(req, res) {
        console.log('Body', req.body);
        console.log('User', req.user);
        models.Messages.create({
            contents: req.body.contents,
            PetId: req.body.PetId,
            UserId: req.user.id
        }).then(
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

    // add new Owner
    app.post("/add/user/:id", function(req, res) {
        models.User.findOne({
            where: { email: req.body.email }
        }).then((newOwner) => {
            if (newOwner) {
                console.log(newOwner)
               return newOwner.addPet(req.params.id).then((data) => {res.json(data)})
            }
            else {
                res.send("No User Found")// TOOO: Return an error message indicating the user was not found
            };
        })
    });
}