const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = 4000;

const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const saltRounds=10;
dotenv.config();
let Regis=require('./models/signup.model');
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

app.post("/regiss/singup",function(req,res){
    
    let newEmail=req.body.email;
    let newPassword=req.body.password;
    let newRepassword=req.body.repassword;
    let jeeRoll=req.body.jeeroll;
    
    Regis.findOne({email:newEmail},function(err,foundEmail){
        if(!err){
            if(!foundEmail){
                console.log("Users is not registered");

                console.log(req.body);
                if(newPassword===newRepassword){
                    
                    bcrypt.hash(newPassword, saltRounds,function(err,hash){
                        let regi = new Regis({
                            jeeroll: jeeRoll,
                            email: newEmail,
                            password: hash,
                            verification:false
                        });
                        regi.save();
                    });
                    
                   
                    res.send("You got registered");
                }
                else{
                    console.log("Password did'nt match");
                    res.send("Your Password did not matches");
                }
                
            }
            else{
                console.log("User is already register please login");
                res.send("You are already register please login");
            }
        }
        else{
            console.log(err);
        }
    })
    
  });
app.post("/regiss/signin",function(req,res){
    let newEmail=req.body.email;
    let newPassword=req.body.password;
    
        
        Regis.findOne({email:newEmail},function(err,foundEmail){
            if(!err){
                if(!foundEmail){
                    res.json({'login':'false'});
                }
                else{
                   if(foundEmail.verification===true){
                    bcrypt.compare(newPassword,foundEmail.password,function(err,results){
                        if(results===true){
                            res.json({'login':'true'});
                        } else{
                       
                            res.json({'login':'false'});
                        }
                       
                    });
                }
                else{
                    res.json({'login':'false',
                                'verification':'false'
                })
                }
                   
                        
                  
                }
            }
        })
    

});





app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

