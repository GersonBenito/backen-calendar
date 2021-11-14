const { Router} = require('express');

const router = Router();
const auth = require('../controller/auth.controller');

router.get('/',auth.obtenerUsuarios);
router.post('/', auth.agregarUsuario);
router.post('/', auth.loginUsuario);
router.put('/:id', auth.actualizarUsuario);
router.delete('/:id', auth.elimianrUsuario);
router.post('/renew', auth.renovarToken);

module.exports  = router;
