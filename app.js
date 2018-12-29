'use strict';

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


///routes
app.use('/user', userRoutes);

module.exports = app;