const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //db

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Neltarim:wBaPwVz8Rzj0vpEp@goFullstack-cluster.xv6px.gcp.mongodb.net/goFullstackdb?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => console.log('MongoDB connection established.'))
    .catch(() => console.log('MongoDB can\'t be reached.'));


const app = express(); //init of the ap instance

app.use((req, res, next) => { // API AUTORISATION SETTINGS !
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json()); //parse the body html into json

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app; //export of the app