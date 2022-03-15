// Inicializadores
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const users = require('../models/userModel')

const registerUser = asyncHandler(async(req, res) => {
    
    //Desestructuramos los datos del body
    const { name, email, password } = req.body

    //Verificación que esten completos los datos
    if (!name || !email || !password){
        res.status(400)
        throw new Error('te faltan datos')
    }

    //Verificación que no existe el usuario
    const userExist = await users.findOne({ email })
    if (userExist){
        res.status(400)
        throw new Error('ese usuario ya existe')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10) //genera 10 números para el método de cifrado
    const hashedPassword = await bcrypt.hash(password,salt) //cifra con los parametros password y salt

    //Creación de usuario
    const user = await users.create({ 
        name,
        email,
        password: hashedPassword
    })

    //confirmación de creación de usuario
    if (user){
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Datos no válidos')
    }
})

const loginUser = asyncHandler(async(req, res) => {

    //Destructuración del body
    const { email, password } = req.body

    //Verificación de usuario existente
    const user = await users.findOne({ email })
    
    //Si existe el usuario, vamos a comparar el password con el hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('El usuario no existe')
    }

})

const profileUser = asyncHandler(async(req, res) => {
    
    //Destructuración del body
    const { email } = req.body

    //Verificación de usuario existente
    const user = await users.findOne({ email })

    console.log(user)
    //Si existe el usuario, mostramos datos del perfil
    if(user){
        res.status(200).json({
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        })
    } else {
        res.status(400)
        throw new Error('El usuario que quieres ver el perfil no existe')
    }
})

module.exports = {
    registerUser,
    loginUser,
    profileUser
}