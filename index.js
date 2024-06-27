// const app = require('./src/app')
// const config = require('./src/config/config.cjs')
// const { dbConnTest } = require('./src/database/db')

// app.listen(config.app.port, async ()=>{
//     await dbConnTest()
//     console.log(`
//         Nombre: G10 Backend Node
//         Ambiente: ${config.env}
//         Aplicacion funcionando en: http://localhost:${config.app.port}
//     `)
// })

const express = require('express')
const app = express()
const config = require('./src/config/config')

const PORT = config.app.port

app.get('/', (req, res)=>{
    res.send("Aplicación funcionand")
})



app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en http://localhost:${PORT}`)
})