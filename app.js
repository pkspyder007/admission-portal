const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = 4000;
const admissionRoutes = express.Router();
const dotenv = require('dotenv')
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
console.log(process.env['MONGODBCRED']);
mongoose.connect("mongodb+srv://"+process.env['MONGODBCRED']+"@cluster0.phmm3.mongodb.net/admissionPortal", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const Schema = mongoose.Schema;


let regis = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

app.use('/',admissionRoutes );
admissionRoutes.route('/')

module.exports = mongoose.model('regis', regis);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});