const express = require('express');
const router = express.Router(); // metodo de express para mandar a llamar las rutas
const { getExpenses, postExpenses, deleteExpenses } = require('../controllers/expenseControllers') //IMPORTAR EL FUNCIONAMIENTO DE LAS RUTAS DEL CONTROLADOR
const { protect } = require('../middlewares/authMiddleware')

// METHOD #3
router.route('/').get(protect, getExpenses).post(protect, postExpenses); 

router.route('/:id').delete(protect, deleteExpenses);

module.exports = router //EXPORTA LAS RUTAS