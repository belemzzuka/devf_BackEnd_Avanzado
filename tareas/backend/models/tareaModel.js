// MVC - Model (aquí creamos el DB Schema)

const mongoose = require('mongoose'); //inicializar mongoose

const tareaSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Es mandatorio escribir un texto']
    }
}, {
    timestamps: true, //Cuando creemos un nuevo documento, le va a agregar el timestamp (Created at y Updated at)
})

module.exports = mongoose.model('tareas',tareaSchema) //mongoose.model(<CollectionName>,<CollectionSchema>)