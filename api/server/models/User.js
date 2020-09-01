const mongoose = require('mongoose');


let User = new mongoose.Schema({
    username: {type: String, required: true, unique: true },
    hash: String,
    salt: String
});

user.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash= crypto.pbkdf2Sync(password,this.salt,1000,64, 'sha512').toString('hex');
}