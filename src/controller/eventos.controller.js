const { response } = require("express");
const Evento = require('../model/Evento');

const getEventos = async (req, res = response) =>{

    try {

        const eventos = await Evento.find().populate('user','name');
        
        return res.status(200).json({
            status: 200,
            eventos: eventos,
            message: 'Eventos obtenidos correctamente'
        });

    } catch (error) {
        
        console.log(error);

        return res.status(400).json({
            status: 400,
            message: 'Error al obtener correctamente'
        });

    }

}

const crearEvento = async (req, res = response) =>{

    try {

        const evento = new Evento(req.body);
        evento.user = req.uid;

        const events = await evento.save();
        
        return res.status(200).json({
            status: 200,
            evento: events,
            message: 'Eventos creado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 500,
            message: 'Error al crear correctamente'
        });
        
    }

}

const actualizarEvento = async (req, res = response) =>{

    try {

        const eventoId = req.params.id;
        const uid = req.uid;
        // const evento = req.body;

        const evento = await Evento.findById(eventoId);
        if(!evento){

            return res.status(404).json({
                status: 404,
                message: 'No se encontro el evento'
            });
            
        }

        if(evento.user.toString() !== uid){

            return res.status(401).json({
                status: 401,
                message: 'No tienes permiso para actualizar este evento'
            });

        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        await Evento.updateOne({ _id: eventoId }, nuevoEvento);
        
        return res.status(200).json({
            status: 200,
            message: 'Eventos actualizado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 500,
            message: 'Error al actualizar evento'
        });
        
    }

}

const eliminarEvento = async (req, res = response) =>{

    try {

        const eventoId = req.params.id;
        const uid = req.uid;

        const evento = await Evento.findById(eventoId);

        if(!evento){
            
            return res.status(404).json({
                status: 400,
                message: 'No se encontro el evento'
            });
        }

        if(evento.user.toString() !== uid){

            return res.status(401).json({
                status: 401,
                message: 'No tienes permiso para eliminar este evento'
            });

        }

        await Evento.deleteOne({_id: eventoId});
        
        return res.status(200).json({
            status: 200,
            message: 'Eventos eliminado correctamente'
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 500,
            message: 'Error al eliminar evento'
        });
        
    }

}

module.exports = {

    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento

}