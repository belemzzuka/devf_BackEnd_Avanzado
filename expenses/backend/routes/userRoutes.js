const express = require('express'); //inicializar express
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userControllers') //importar los controladores

router.route('/').post(registerUser).get(getUsers) //regsitrar un usuario, obtener la lista de usuarios
router.post('/login', loginUser) //loggear user

module.exports = router;