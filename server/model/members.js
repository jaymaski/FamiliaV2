const mongoose =  require('mongoose');

var schema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    middleName:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },

    bloodType:String,
    birthday:Date, 
    address:String, 
    workAddress:String,
    nickname:String,
    cellphone:String,
    telephone:String,
    primaryRole:String,
    secondaryRole:String,
    civilStatus:String,
    area:String,
    parish:String,
    photoPostFile:String,
    yearJoined:String,
    ministry:String,
    email:String,
    notes:String,
    userId:String,
    homecellHead:String
})

const Memberdb = mongoose.model('memberdb', schema);

module.exports = Memberdb;