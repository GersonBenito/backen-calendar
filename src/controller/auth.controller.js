const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../model/Usuario');
const { generarJWT } = require('../helpers/jwt');

const obtenerUsuarios = async (req, res = response) =>{

    try {
        
        let data = {
            nombre: 'Gerson Benito',
            edad: 22
        }
        
        return res.status(200).json({
            status: 200,
            data: data,
            message: 'Usuarios obtenidos correctamente'
        })

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al obtener los usuarios'
        })
    }

}

const agregarUsuario = async (req, res = response) =>{

    try {

        const { email, password } = req.body;

        let usuario = await Usuario.findOne({email});
        
        if(usuario){
            
            return res.status(400).json({
                status: 400,
                message: 'ya existe un usuario con ese correo'
            });
        }

        usuario = new Usuario(req.body);
        
        // encriptar password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        // generar JWT
        const token = await generarJWT(usuario._id, usuario.name);

        return res.status(201).json({
            status: 201, //cuando se graba un registro en base de datos
            uid: usuario._id,
            name: usuario.name,
            token: token,
            message: 'usuario agregado correctamente'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: 'ocurrio un error al agregar el usuario'
        });
    }
}

const actualizarUsuario = async (req, res = response) =>{
    try {
        
        return res.status(200).json({
            status: 200,
            message: 'usuario actualizado correctamente'
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurrio un error al actualizar el usuario'
        });
    }
}

const elimianrUsuario = async (req, res = response) =>{
    try {
        
        return res.status(200).json({
            status: 200,
            message: 'usuario eliminado correctamente'
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurrio un error al eliminar el usuario'
        });
    }
}

const loginUsuario = async (req, res = response) =>{
    try {
        
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({email});
        
        if(!usuario){

            return res.status(400).json({
                status: 400, 
                message: 'El usuario no existe con ese email'
            });

        }

        // validar password
        const validatePassword = bcrypt.compareSync( password, usuario.password );
        if(!validatePassword){

            return res.status(400).json({
                status: 400,
                message: 'La contrasena ingresado es incorrecto'
            });

        }

        // generara JWT
        const token = await generarJWT( usuario._id, usuario.name );
        return res.status(200).json({
            status: 200,
            uid: usuario._id,
            name: usuario.name,
            token: token,
            message: 'inicio de sesison correctamente'
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'ocurrio un error al iniciar sesion'
        });
    }
}

const renovarToken = async (req, res = response) =>{
    try {
        
        const { uid, name } = req;

        const token = await generarJWT(uid, name);

        return res.status(200).json({
            status: 200,
            uid: uid,
            name: name,
            token: token,
            message: 'token renovado correctamente'
        });

    } catch (error) {

        return res.status(400).json({
            status: 400,
            message: 'ocurrio un error al renovar el token'
        });
    }
}

module.exports = {
    obtenerUsuarios,
    agregarUsuario,
    actualizarUsuario,
    elimianrUsuario,
    loginUsuario,
    renovarToken
}