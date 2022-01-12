const {uuid} = require('uuidv4')

 class Participante {
     
    id= '';
    nombre = '';
    modo = '';
    puntuacion = '';

    constructor( nombre , modo , puntuacion){
   
        this.id = uuid(),
        this.nombre = nombre,
        this.modo = modo,
        this.puntuacion = puntuacion

    }

 }

 module.exports = Participante;