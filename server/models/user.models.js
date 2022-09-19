const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({    
})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);