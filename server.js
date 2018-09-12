'use strict'
const config = require('config.js')

const express = require ('express')
const mongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()

app.listen(config.port, () => {
    console.log('Service up and running on port.' + config.port)
})