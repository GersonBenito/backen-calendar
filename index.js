const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./src/routes/routes');


const app = express();

app.use(express.json());
app.use(cors());

// directorio publico
app.use(express.static('public'));

app.use('/api', router);

app.listen(process.env.PORT, () =>{

    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);

});