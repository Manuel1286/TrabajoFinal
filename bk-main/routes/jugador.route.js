const express = require('express'),
    routes = express.Router(),
    jugadortCtrl = require('../controller/jugador.controller')

routes.post('/', jugadortCtrl.create)

module.exports = routes



