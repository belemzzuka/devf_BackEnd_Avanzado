// Inicializadores
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const users = require('../models/userModel')

//### REGISTER USER ###
const registerUser = asyncHandler(async(req, res) => {
    
    //Desestructuramos los datos del body
    const { name, email, password } = req.body

    //Verificación que esten completos los datos
    if (!name || !email || !password){
        res.status(400)
        throw new Error('Missing data to register user')
    }

    //Verificación que no existe el usuario
    const userExist = await users.findOne({ email })
    if (userExist){
        res.status(400)
        throw new Error('The user already exists')
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
        throw new Error('Invalid user data')
    }
})

//### LOGIN USER ###
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
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('The user does not exist')
    }

})

// ### GET USERS ###
const getUsers = asyncHandler (async(req, res) => {
    const userList = await users.find() //devolver todos las usuarios registrados
    res.status(200).json(userList)
})

const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET, { // jwt.sign parametros: payload, secret y tiempo de expiración
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    generateToken
}