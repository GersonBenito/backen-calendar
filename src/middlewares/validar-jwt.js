const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) =>{

    // x-token
    const token = req.header('x-token');
    
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'No hay token en la peticion'
        });
    }

    try {

        // verificar si el token es correcto
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'El token no es valido'
        });
    }

    next();

}

module.exports = {
    validarJWT
}