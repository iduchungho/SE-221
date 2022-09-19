if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user.models')
const userRoute = require('./routes/user.routes')
const ExpressError = require('./utils/ExpressError')
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
app.use(express.urlencoded({extended:true}))
// CORS policy
app.use(cors({
    origin:"http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
}))
// Connect to the Mongo DB
const DB_URL = process.env.DB_URL;
console.log(DB_URL)
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));
// Passport setup
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const secret = process.env.SECRET||"hihihahaa"
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret,
    cookie:{
        httpOnly:true,
        secure: (process.env.NODE_ENV && process.env.NODE_ENV == 'production') ? true:false,
        expires: Date.now() + 1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// Define routes here
app.get('/' , (req, res) => {
    res.send('Hello World');
})
app.use('/',userRoute);
// Error handler
app.all('*',(req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})
app.use((err, req, res, next) => {
    const {message = "Syntax error",statusCode = 500} = err
    res.json({state:"fail",statusCode,message})
})
// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})