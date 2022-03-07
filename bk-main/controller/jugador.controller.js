const ctrljugador = {}
const jugador = require("../model/jugador")

//La peticion que me realizan es por via POST
ctrljugador.create = async (req, res) => {
    //Con desestructuracion 
    const { equipo, rendimiento, valorApostar } = req.body
    const newjugador = new jugador({
        equipo: equipo,
        rendimiento: rendimiento,
        valorApostar: valorApostar
    })
    newjugador.save()
    res.json({ status: true })
}

module.exports = ctrljugador