const { Router } = require('express');

const router = Router();

// rutas principales
const auth = require('./auth.router');
router.use('/auth',auth);

const eventos = require('./evento.router');
router.use('/evento', eventos);

module.exports = router;