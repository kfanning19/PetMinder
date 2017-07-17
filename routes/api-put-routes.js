var models = require("../Models");
var randomstring = require("randomstring");
var nodemailer = require("nodemailer");
var bCrypt = require('bcrypt-nodejs');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com"
    auth: {
        user: 'philopetapp@gmail.com',
        pass: 'weLovePets0117'
    }
});
module.exports = function(app) {
    // ------PUT routes-------------
    // update New User
    app.put("/update/user/:id", function(req, res) {
        models.User.update(req.body, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update new Pet
    app.put("/update/pet/:id", function(req, res) {
        models.Pet.update(req.body, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });

    // update activity
    app.put("/update/activity/:id", function(req, res) {
        models.Activity.update(req.body, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Food
    app.put("/update/food/:id", function(req, res) {
        models.Food.update(req.body, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Health
    app.put("/update/Health/:id", function(req, res) {
        models.Health.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Illness
    app.put("/update/Illness/:id", function(req, res) {
        models.Illness.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Medications
    app.put("/update/Medication/:id", function(req, res) {
        models.Medications.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });

    // update Message
    app.put("/update/Messages/:id", function(req, res) {
        models.Messages.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Professional
    app.put("/update/Professional/:id", function(req, res) {
        models.Professional.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update Weight
    app.put("/update/Weight/:id", function(req, res) {
        models.Weight.update({ req.body }, { where: { id: req.params.id } }).then((data) => {
            res.json(data);
        });
    });
    // update forgotten password
    app.put("/update/forgot-password", function(req, res) {

        models.User.findOne({ where: { email: req.body.email } }).then((user) => {
            var random = randomstring.generate();
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            var newPassword = generateHash(random);

            if (user) {
                user.update({ "password": newPassword }).then((data) => {
                    var mailOptions = {
                        to: req.body.email,
                        subject: "Updated password",
                        text: "You said that you forgot your password, so we have temporarily changed it for you. Your temporary passsword is: " + random + ". Please sign in using this password. You can update the password to something you will remember on your profile page."
                        html: "<body><p>You said that you forgot your password, so we have temporarily changed it for you. Your temporary passsword is: " + random + ". Please sign in using this password. You can update the password to something you will remember on your profile page.</p></body>"
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
                    })
                })

            }
        })
    });
}