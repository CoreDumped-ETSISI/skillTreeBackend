'use strict';

const mongoose = require('mongoose');
const experienceTable = require("./expTable")
const Schema = mongoose.Schema
const Modules = require('./modules')

const UserSchema = new Schema({
    user: {
        name: String,
        totalExp: Number,
        email: String,
        password: String,
        level: Number,
        isAdmin: Boolean
    },
    modules: {type: Modules}
})

module.exports = mongoose.model('User', UserSchema);