'use strict'

const config = require('../config');
const input = require('../services/inputValidators');
const User = require('../models/user')
const TelegramBot = require('node-telegram-bot-api')
const TGtoken = config.TGtoken

const bot = new TelegramBot(TGtoken, {polling: false})

function signUp(req,res){
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let isAdmin = req.body.isAdmin

    User.findOne({email: email}).exec((err, userExist) => {
        if(err) return res.sendStatus(500)
        if(userExist) return res.sendStatus(403)
        if (!input.validEmail(req.body.email)) return res.status(402).send({"message": "Given email is not valid, please check you wrote it properly"})
        if (!input.validPassword(req.body.email)) return res.status(402).send({"message": "Given password is not valid, please choose another one"})

        const User = new User({
            name: name,
            totalExp: 0,
            email: email,
            level: 0,
            isAdmin: isAdmin,
            password: password,
        })
        user.save((err, userSaved) => {
            if(err) {
                return res.status(500).send({"message": 'Error processing request'})
            }
            if(!userSaved) return res.status(500).send({'message': 'Error saving user'})
            return res.status(200).send({'message': 'User created'})
        })
    })
}

function getUserModules(req, res) {
    if(!req.params._id) return res.status(500).send({"message":"Error on query parameters"})

    User.findOne({_id:req.params._id}, (err, user) => {
        if(err) return res.status(500).send({"message": "Error processing request"})
        if(!user) return res.status(404).send({"message": "User with such _id not found"})
        return user.modules
    })
}

function getBaseExpMultiplier(){
    return {"baseExpMultiplier": config.expMultiplier}
}

function login(req, res) {
    if (!input.validEmail(req.body.email)) return res.sendStatus(400);
    if (!req.body.password) return res.sendStatus(400);

    User.findOne({email: req.body.email}).exec((err, user) => {
            if (err) return res.sendStatus(500);
            if (!user) return res.sendStatus(404);

            return res.status(200).send(user)
        })
}

function updateUserModules(req, res) {
    if(!req.body.modules) return res.status(402).send({"message": "Error: no modules found on request."})
    let modules = req.body.modules
    if(!req.body.email) return res.status(402).send({"message": "Error: no user email found on request."})
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(404);
        user.set(modules);
        user.save((err) => {
            if (err) return res.sendStatus(500);
            return res.sendStatus(200)
        })
    })
}

function getUserByName(req, res) {
    User.findOne({email:req.body.name})
        .exec((err, user) => {
            if (err) return res.sendStatus(500);
            if (!user) return res.sendStatus(404);
            return res.status(200).send(user)
        })
}

function getUserList(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.sendStatus(500);
        if (!users) return res.sendStatus(404);
        res.status(200).send(users)
    })
}

function getRankingOfUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.sendStatus(500);
        if (!users) return res.sendStatus(404);

        let namesAndLevels = []

        users.forEach(user => {
            let info = {"name": user.name, "level": user.level}
            namesAndLevels.push(info)
        });
        res.status(200).send(namesAndLevels.sort(function(a,b) {return a.level-b.level}))
    })
}

function deleteUser(req, res) {
    let userId = req.params.id;

    User.findById(userId, (err, user) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(404);
        user.remove();
        return res.sendStatus(200)
    })
}

function notifyAdminsForValidation(req, res) {

    if(!req.params._id) return res.status(502).send({"message": "Error on query parameters. Missing user._id"})
    if(!req.params.validatingNode) return res.status(502).send({"message": "Error on query params. Missing moduleName"})

    User.findOne({_id: req.params._id}, (err, user) => {
        if(err) return res.status(500).send({"message": "Error processing request"})
        if(!user) return res.status(404).send({"message": "User couldn't be found"})

        const moduleForApproval = req.params.validatingNode
        if(user.modules.moduleForApproval.completed) return res.status(401).send({"message": "This module has already been completed!"})

        const message = "The user " + user.name + ", which mail is: [" + user.email + "] has requested a new validating test for this competence: " + moduleForApproval
        bot.sendMessage(config.privateChatId, message).catch((error) => {
            return res.status(500).send({"message": "Error sending message to Validators, please contact staff"})
        })

        return res.status(200).send({"message": "Message sent to Validators, asking for testing this competence: " + moduleForApproval})
    })
}

module.exports = {
    signUp,
    login,
    getUserModules,
    getBaseExpMultiplier,
    updateUserModules,
    getRankingOfUsers,
    getUserByName,
    getUserList,
    deleteUser,
    notifyAdminsForValidation
}