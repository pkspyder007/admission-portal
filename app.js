const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require("lodash");
const cors = require('cors');
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const PORT = 4000;

const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const saltRounds = 10;
dotenv.config();
let Regis = require('./models/signup.model');
const { log } = require('debug');
const { findOne } = require('./models/signup.model');

app.use(cors());
app.use(bodyParser.json());
// mongoose connection
mongoose.connect("mongodb+srv://" + process.env['MONGODBCRED'] + "@cluster0.phmm3.mongodb.net/admissionPortal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})
// nodemailer verifaction
const oauth2Client = new OAuth2(
    process.env['CLIENTID'], //clientid
    process.env['CLIENTSECRET'], //client secret
    process.env['REDIRECTURRL'] //redirect url
)
oauth2Client.setCredentials({
    refresh_token:process.env['REFRESHTOKEN']
});
const accessToken = oauth2Client.getAccessToken();
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: process.env['NODEMAILERUSER'], 
         clientId: process.env['CLIENTID'],
         clientSecret: process.env['CLIENTSECRET'],
         refreshToken: process.env['REFRESHTOKEN'],
         accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
      }
});
// for new registeration
app.post("/regiss/singup", function (req, res) {

    let newEmail = req.body.email;
    let newPassword = req.body.password;
    let newRepassword = req.body.repassword;
    let jeeRoll = req.body.jeeroll;

    Regis.findOne({ email: newEmail }, function (err, foundEmail) {
        if (!err) {
            if (!foundEmail) {
                console.log("Users is not registered");
                // email verification
               
                console.log(req.body);
                if (newPassword === newRepassword) {
                 var rand, mailOptions, host, link;                                                                                                                                         rand = Math.floor((Math.random() * 100) + 54);
                host = req.get('host');
                rand=newEmail+rand;
                console.log(host);
                link = "http://" + host + "/verify?id=" + rand;
                mailOptions = {
                    to: newEmail,
                    subject: "Please confirm your Email account",
                    html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"

                }
                console.log(mailOptions);
                smtpTransport.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        console.log(error);
                        res.end("error");
                    } else {
                        console.log("Message sent: " + response.message);
                        res.end("sent");
                    }
                });

                    bcrypt.hash(newPassword, saltRounds, function (err, hash) {
                        let regi = new Regis({
                            jeeroll: jeeRoll,
                            email: newEmail,
                            password: hash,
                            verification: false,
                            verificationid:rand
                        });
                        regi.save();
                    });


                    res.send("You got registered");
                }
                else {
                    console.log("Password did'nt match");
                    res.send("Your Password did not matches");
                }

            }
            else {
                console.log("User is already register please login");
                res.send("You are already register please login");
            }
        }
        else {
            console.log(err);
        }
    })

});
// for login
app.post("/regiss/signin", function (req, res) {
    let newEmail = req.body.email;
    let newPassword = req.body.password;


    Regis.findOne({ email: newEmail }, function (err, foundEmail) {
        if (!err) {
            if (!foundEmail) {
                res.json({ 'login': 'false' });
            }
            else {
                if (foundEmail.verification === true) {
                    bcrypt.compare(newPassword, foundEmail.password, function (err, results) {
                        if (results === true) {
                            res.json({ 'login': 'true' });
                        } else {

                            res.json({ 'login': 'false' });
                        }

                    });
                }
                else {
                    res.json({
                        'login': 'false',
                        'verification': 'false'
                    })
                }



            }
        }
    })


});

// verify route
app.get("/verify", function(req,res){
    
    var verficationId= req.query.id;
    Regis.findOneAndUpdate({verificationid:verficationId},{verification:true}, function(err, foundUser){
        if(!err){
            if(foundUser){
            
                if(foundUser.verification){
                    res.send('<h1>Your email is already verfied  you can now login</h1>');
                }
                else{
                    res.send('<h1>Your email verfication is succesfull you can now login</h1>');
                }
                
            }
            else{
                res.send('<h1 style="color:red;" >Your email is verfication is unsuccesfull you can contact adminstration</h1>');
            }
        }
        else{
            console.log(err);
        }
    });
    
   
    });
   



app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

