const express = require('express'); //inicializar express
const router = express.Router();
const { registerUser, loginUser, profileUser } = require('../controllers/userControllers') //importar los controladores

router.post('/', registerUser) //regsitrar un usuario, el segundo parámetro es el controlador
router.post('/login', loginUser) //loggear user
router.get('/profile', profileUser) //traer los datos del usuario

module.exports = router;