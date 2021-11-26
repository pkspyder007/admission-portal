const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Regis = new Schema({
    jeeroll: {
        type: String
    },
    render:{
        type:Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    verification:{
        type:Boolean
    },
    verificationid:{
        type:String
    },
    phone: {
        type: Number
    },
    name:{
        type: String
    },
    semail:{
        type:String
    },
    sgender:{
        type:String
    },
    sdob:{
        type:String
    },
    religion:{
        type:String
    },
    maincategory:{
        type:String
    },
    
    saadhar:{
        type:Number
    },
    sarea:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    pincode:{
        type:Number
    },
    permadd:{
        type:String
    },
    temadd:{
        type:String
    },
    fname:{
        type:String
    },
    focupation:{
        type:String
    },
    femail:{
        type:String
    },
    fnum:{
        type:Number
    },
    fsalary:{
        type:Number
    },
    faadh:{
        type:Number
    },
    mname:{
        type:String
    },
    mocupation:{
        type:String
    },
    memail:{
        type:String
    },
    mnum:{
        type:Number
    },
    msalary:{
        type:Number
    },
    maadh:{
        type:Number
    }
});
module.exports = mongoose.model('Regis', Regis);