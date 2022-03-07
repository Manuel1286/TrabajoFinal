const  { Router } = require('express'),
    routes = Router()

routes.use('/jugador', require('../routes/jugador.route'))  

module.exports = routes