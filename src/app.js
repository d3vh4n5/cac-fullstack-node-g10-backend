const express = require('express')
const app = express()
const cors = require('cors')

const appRouter = require('./routes/appRouter.cjs')
const examplesRouter = require('./routes/examplesRouter')
const contactMessageRouter = require('./routes/contactMessageRouter')
const authRouter = require('./routes/authRouter')
const medicalStudyRouter = require('./routes/medicalStudyRouter')
// const upload = require('./middlewares/multer')

// middlewares
app.use(cors()) // Por temas de seguridad del navegador
app.use(express.json()) // Para que lea los json del body
// Middleware para registrar cada solicitud recibida
app.use((req, res, next) => {
    console.log('Solicitud recibida:', req.method, req.url);
    next(); // Llama a next() para pasar el control al siguiente middleware
});
app.use(express.static('public')) // Servidor de archivos estáticos

// Rutas de aplicacion
app.use('/', appRouter);
// app.post('/upload', upload.single('archivo'), (req, res)=> {
//     console.log({ info: req.file })
//     const filepath = saveFile(req.file)
//     res.json({ msg:'Archivo subido con éxito', filepath})
// })

// app.post('/uploads', upload.array('archivos', 10), (req, res)=> {
//     console.log({ info: req.files })
//     req.files.map(saveFile)
//     res.json({ msg:'Archivos subidos con éxito'})
// })


// Rutas de API
app.use('/api/v1/examples', examplesRouter)
app.use('/api/v1/contact-messages', contactMessageRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/medical-studies', medicalStudyRouter)

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