const mongoose = require('mongoose')
    config = require('process')
    config = require('../config/config')

// Conectarnos a la base de datos

mongoose.connect(config.urlDb)
.then(db => console.log("Se conecto a la BD"))
.catch(db => console.log(err))

module.exports = mongoose