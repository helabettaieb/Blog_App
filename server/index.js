const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config()

// generate secret key using crypto random string
// require('crypto').randomBytes(32).toString('hex')


// middleware
app.use(cors());
app.use(express.json());


mongoose.connect(`mongodb+srv://helabettaieb1991:8FIQ61kGSYZB3MBD@helabettaieb.jmgs8xo.mongodb.net/helabettaieb?retryWrites=true&w=majority&appName=helabettaieb`)

    .then(console.log("MongoDb Connected successfully!"))
    .catch((error) => console.log("Error connecting to Mongodb"));

//import routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

//post request for a token
app.post('/jwt', async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
    res.send({token});
})

app.get('/', (req, res) => {
    res.send('Hello Developer!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});