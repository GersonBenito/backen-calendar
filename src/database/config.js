const { connect } = require('mongoose');

const dbConexion = async () =>{
    try {
        
        // falta la url y el parseo
        await connect(process.env.DB_URL,{
            // url parse
        });
        console.log('conectado a la base de datos')

    } catch (error) {
        console.log('ocurrio un error al intentar conectarse a la base de datos');
    }
}

module.exports = { dbConexion };