const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const users = require('../models/userModel')

const protect = asyncHandler (async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.startswith('Bearer')){ //En los headers, la cadena de texto de autorizacion empieza con Bearer
        try{
            //obtener el token del header (Bearer token)
            token = req.headers.authorization.split(' ')[1] // se hace un split porque la cadena es Bearer 7933khfs52kf, esto lo vuelve un array donde la posicion 0 es Bearer y la posicion 1 es el token

            //verificacion de la firma
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {

        }
    }

})