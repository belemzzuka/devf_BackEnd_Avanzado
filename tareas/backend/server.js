// Server hace todas las conexiones e inicializaciones

const express = require('express');
const dotenv = require('dotenv').config(); //traer la config de .env
const { errorHandler } = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB() //conectar a la db con lo que trae del archivo config/db

const app = express(); // crear la app

app.use(express.json()) // middleware para que la aplicacion tenga acceso a los metodos de json express
app.use(express.urlencoded({ extended: false })) //podamos usar el urlencoded para leer el body

app.use('/api/tareas', require('./routes/tareaRoutes')) // MIDDLEWARE PARA CONECTAR CON LAS RUTAS

app.use(errorHandler) // consumir el error handler, despues de laruta

app.listen(port, () => console.log(`El servidor inició en el puerto ${port}`)) //escuchar en el puerto creado
