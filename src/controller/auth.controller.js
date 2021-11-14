const { response } = require("express");

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
        
        return res.status(200).json({
            status: 200,
            message: 'usuario agregado correctamente'
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
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
        
        return res.status(200).json({
            status: 200,
            message: 'inicio de sesison correctamente'
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurrio un error al iniciar sesion'
        });
    }
}

const renovarToken = async (req, res = response) =>{
    try {
        
        return res.status(200).json({
            status: 200,
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