const { Router} = require('express');
const { check } = require('express-validator');

const router = Router();
const auth = require('../controller/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');

router.get('/', auth.obtenerUsuarios);

router.post('/',
    [
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El correo es obligatorio').isEmail(),
        check('password','El password debe ser de 6 caractres minimo').isLength({ min: 6 }),
        validarCampos // middleware encargado de realizar la validacion de los campos
    ],
auth.agregarUsuario);

router.post('/login',
    [
        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres minimo').isLength({ min: 6 }),
        validarCampos
    ],
auth.loginUsuario);

router.put('/:id', auth.actualizarUsuario);
router.delete('/:id', auth.elimianrUsuario);
router.post('/renew', auth.renovarToken);

module.exports  = router;
