const { Router } = require('express');
const evento = require('../controller/eventos.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.get('/', validarJWT, evento.getEventos);
router.post('/', validarJWT, evento.crearEvento);
router.put('/:id', validarJWT, evento.actualizarEvento);
router.delete('/:id', validarJWT, evento.eliminarEvento)

module.exports = router;