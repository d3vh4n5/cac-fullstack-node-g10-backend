const express = require('express')
const app = express()
const cors = require('cors')

const appRouter = require('./routes/appRouter.cjs')
const examplesRouter = require('./routes/examplesRouter')
const contactMessageRouter = require('./routes/contactMessageRouter')

app.use(cors())
app.use(express.json())

// Servidor de archivos estáticos
app.use(express.static('public'))

// Rutas de aplicacion
app.use('/', appRouter);


// Rutas de API
app.use('/api/v1/examples', examplesRouter)
app.use('/api/v1/contact-messages', contactMessageRouter)



// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).send({ error: 'Ruta no encontrada' });
});

// Middleware para manejar otros errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo salió mal!' });
});

module.exports = app