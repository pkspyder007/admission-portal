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
    },
    jeeapplication:{
        type:String
    },
        jeerank:{
            type:Number
        },
        jeeperc:{
            type:Number
        },
        jeestate:{
            type:String
        },
        jeeboard:{
            type:String
        },
        jeeschool:{
            type:String
        },
        jeemathp:{
            type:Number
        },
        jeemathmp:{
            type:Number
        },
        jeematht:{
            type:Number
        },
        jeemathmt:{
            type:Number
        },
        jeemath:{
            type:String
        },
        jeephysicsp:{
            type:Number
        },
        jeephysicsmp:{
            type:Number
        },
        jeephysicst:{
            type:Number
        },
        jeephysicsmt:{
            type:Number
        },
        jeephysics:{
            type:String
        },
        jeechemp:{
            type:Number
        },
        jeechemmp:{
            type:Number
        },
        jeechemt:{
            type:Number
        },
        jeechemmt:{
            type:Number
        },
        jeechem:{
            type:String
        }
});
module.exports = mongoose.model('Regis', Regis);