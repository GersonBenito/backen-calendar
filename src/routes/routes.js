const { Router } = require('express');

const router = Router();

// rutas principales
const auth = require('./auth.router');
router.use('/auth',auth);

module.exports = router;