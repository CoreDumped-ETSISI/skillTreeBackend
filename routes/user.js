'use strict';

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers')

router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.get('/userList', userController.getUserList)
router.put('/update', userController.updateUserModules)
router.get('/ranking', userController.getRankingOfUsers)
router.get('/userName', userController.getUserByName)
router.delete('/delete', userController.deleteUser)

module.exports = router;