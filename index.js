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

app.get('/', (req, res)=>{
    res.send("Aplicación funcionand")
})

app.listen(3000, ()=>{
    console.log(`Aplicación corriendo en http://localhost:3000`)
})