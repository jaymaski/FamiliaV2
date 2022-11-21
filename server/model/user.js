const mongoose =  require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;