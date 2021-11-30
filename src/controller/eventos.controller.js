const { response } = require("express");

const getEventos = async (req, res = response) =>{

    try {
        
        return res.status(200).json({
            status: 200,
            messge: 'Eventos obtenidos correctamente'
        });

    } catch (error) {
        
        console.log(error);

        return res.status(400).json({
            status: 400,
            messge: 'Error al obtener correctamente'
        });

    }

}

const crearEvento = async (req, res = response) =>{

    try {
        
        return res.status(200).json({
            status: 200,
            messge: 'Eventos creado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: 400,
            messge: 'Error al crear correctamente'
        });
        
    }

}

const actualizarEvento = async (req, res = response) =>{

    try {
        
        return res.status(200).json({
            status: 200,
            messge: 'Eventos actualizado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: 400,
            messge: 'Error al actualizar correctamente'
        });
        
    }

}

const eliminarEvento = async (req, res = response) =>{

    try {
        
        return res.status(200).json({
            status: 200,
            messge: 'Eventos eliminado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: 400,
            messge: 'Error al eliminar correctamente'
        });
        
    }

}

module.exports = {

    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento

}