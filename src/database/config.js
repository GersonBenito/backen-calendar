const { connect } = require('mongoose');

const dbConexion = async () =>{
    try {
        
        await connect(process.env.DB_CONEXION,{
            useNewUrlParser: true,
        });
        
        console.log('conectado a la base de datos')

    } catch (error) {
        console.log('ocurrio un error al intentar conectarse a la base de datos',error);
    }
}

module.exports = { dbConexion };