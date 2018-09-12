'use strict'

const config = require('../config');
const input = require('../services/inputValidators');

function singUp(req,res){
    let name = req.body.name;
    let totalExp = 0;
    let email = req.body.email;
    let password = req.body.password;
    let level = 0;

    
}