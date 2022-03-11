//MVC - CONTROLLER
const async = require('express-async-handler');

// Como vamos a trabajar con mongoose y devuelve promesas, los request deben ir con async y await
const getTareas = asyncHandler (async(req, res) => {
    res.status(200).json({ message: 'Obtener Tareas'})
})

const postTareas = asyncHanlder (async(req, res) => {
    if(!req.body.text){
        // res.status(400).json({ message: 'Es obligatorio agregar una tarea' }) // Manda un mensaje en la consola
        res.status(400)
        throw new Error('Es obligatorio agregar una tarea')
    }

    res.status(200).json({ message: 'Crear una tarea'})
})

const putTareas = asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Modificar Tarea ${req.params.id}`})
})

const deleteTareas = asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Borrar la tarea ${req.params.id}`})
})

module.exports = {
    getTareas, //exportar getTareas
    postTareas,
    putTareas,
    deleteTareas
}