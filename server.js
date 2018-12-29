'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

//mongoose.connect(config.MONGODB, {useMongoClient: true}, (err, res) => {
mongoose.connect('mongodb://localhost:27017/skillTree', (err, res) => {

    console.log(config)
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log("Connection to " + config.MONGODB + " was succesfull");
        app.listen(config.PORT, () => {
            console.log("Node server running on http://localhost:" + config.PORT);
        });
    }
});