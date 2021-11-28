const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) =>{

    return new Promise( (resolve, reject) =>{

        const payload = { uid, name };

        // firmar token
        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn: '2h' //expirar el token en 2 horas
        }, (error, token) =>{

            if(error){
                console.log(error);
                reject('No se puedo generar el token')
            }

            resolve(token);

        });

    });

}

module.exports = {
    generarJWT
}