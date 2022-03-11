
//MVC - CONTROLLER

const getTareas = (req, res) => {
    res.status(200).json({ message: 'Obtener Tareas'})
}

const postTareas = (req, res) => {

    if(!req.body.text){
        // res.status(400).json({ message: 'Es obligatorio agregar una tarea' }) // Manda un mensaje en la consola
        res.status(400)
        throw new Error('Es obligatorio agregar una tarea')
    }

    res.status(200).json({ message: 'Crear una tarea'})
}

const putTareas = (req, res) => {
    res.status(200).json({ message: `Modificar Tarea ${req.params.id}`})
}

const deleteTareas = (req, res) => {
    res.status(200).json({ message: `Borrar la tarea ${req.params.id}`})
}

module.exports = {
    getTareas, //exportar getTareas
    postTareas,
    putTareas,
    deleteTareas
}