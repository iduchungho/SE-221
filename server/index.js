if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
app.use(express.urlencoded({extended:true}))
// Connect to the Mongo DB
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));
// Define routes here
app.get('/' , (req, res) => {
    res.send('Hello World');
})
// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})