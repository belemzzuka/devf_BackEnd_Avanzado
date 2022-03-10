const getTareas = (req, res) => {
    res.status(200).json({ message: 'Obtener Tareas'})
}

const postTareas = (req, res) => {
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