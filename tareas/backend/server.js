const express = require('express');
const dotenv = require('dotenv').config(); //traer la config de .env
const port = process.env.PORT || 5000;

const app = express(); // crear la app

app.use('/api/tareas', require('./routes/tareaRoutes'))

app.listen(port, () => console.log(`El servidor inició en el puerto ${port}`)) //escuchar en el puerto creado
