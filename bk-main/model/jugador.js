const mongoose = require('mongoose')  //Libreria para conectar con mongoDB y hacer consultas

//Definicion del Esquema 
const jugadorShema = new mongoose.Schema
({
    equipo : {type:String, lowercase:true},
    rendimiento:String,
    valorApostar:String
})

module.exports = mongoose.model('jugador',jugadorShema)