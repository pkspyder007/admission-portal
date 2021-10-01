const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = 4000;
const admissionRoutes = express.Router();
const dotenv = require('dotenv')
dotenv.config();
let Regis=require('./signup.model');
const { log } = require('debug');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://"+process.env['MONGODBCRED']+"@cluster0.phmm3.mongodb.net/admissionPortal", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

admissionRoutes.route("/").get(function(req,res){
    Regis.find(function(err,regiss){
        if(err){
            console.log(err);
        }else{
            res.json(regiss)
        }
    })
});
admissionRoutes.route('/add').post(function(req, res) {
    let regis = new Regis(req.body);
    console.log(req.body);
    regis.save()
        .then(regis => {
            res.status(200).json({'regis': 'regis added successfully'});
            
        })
        .catch(err => {
            res.status(400).send('adding new regis failed');
        });
});

app.use('/regiss', admissionRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

