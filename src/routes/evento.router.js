const { Router } = require('express');
const { check } = require('express-validator');
const evento = require('../controller/eventos.controller');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// todas las rutas deben de pasar por la validacion del token
router.use(validarJWT); // uso del middleware para que todas las rutas que esten por debajo pasen por la validacion del token

router.get('/', evento.getEventos); // tambien se puede agregar el middleware a cada ruta, router.get('/', validarJWT, evento.getEventos);

router.post('/', 
    [
        check('title','El campo titulo es requerido').not().isEmpty(),
        check('start', 'La fecha inicial es requerido').custom(isDate),
        check('end', 'La fecha final es requerido').custom(isDate),
        validarCampos
    ],
evento.crearEvento);

router.put('/:id',
    [
        check('title', 'El campo titulo es querido').not().isEmpty(),
        check('start', 'La fecha inicial es requerido').custom(isDate),
        check('end', 'La fecha final es requrido').custom(isDate),
        validarCampos
    ],
evento.actualizarEvento);
router.delete('/:id', evento.eliminarEvento)

module.exports = router;