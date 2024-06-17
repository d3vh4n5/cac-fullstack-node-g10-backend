const { Sequelize } = require('sequelize')
const config = require('../config/config.cjs')

// credenciales
/**
 * (dbname, user, pass {host, lenguage, port})
 */
const db = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: "mysql",
        port: config.database.port,
        // logging: false 
    }
)


// Creo la funcion de conexión para luego exportarla

const dbConnTest = async () => {
    try {
        console.log("Conectando: ")
        console.log(
            config.database.name,
            // config.database.user,
            // config.database.password,
            {
                host: config.database.host,
                dialect: "mysql",
                port: config.database.port 
            }
        )

        await db.authenticate()

        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log('Error al conectar la base de datos: ', error)
    }
}

module.exports = { db, dbConnTest }