const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
const User = require('../models/user.models');

mongoose.connect("mongodb+srv://giaphong:s6API7wIupJErUPu@uwc2.xz7wtxw.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));
    
const seedDb = async () => {
    await User.deleteMany({});
    const user = new User({username: 'admin', password: 'admin'});
    await user.save();
}

seedDb();