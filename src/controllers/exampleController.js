
/**
 * En los archivos de controlladores, van a ir las funciones CRUD
 */


// Imaginen que esto viene de la base de datos
const examples = [
    {id: 1, data: "Esto es un ejemplo"},
    {id: 2, data: "Esto es un ejemplo"},
    {id: 3, data: "Esto es un ejemplo"},
    {id: 4, data: "Esto es un ejemplo"},
    {id: 5, data: "Esto es un ejemplo"},
]

const returnAllExamples = async ( _, res ) => {
    // Some code, go to DB, whatever..
    res.json(examples)
}

const returnOneExample = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const example = examples.find( ex => ex.id === +id)

    if (example !== undefined){
        res.json(example)
    } else {
        res.status(404).json({details: "Ejemplo no encontrado"})
    }
}

const addNewExample = async (req, res) => {
    const { data } = req.body

    const newExample = {
        id: examples.length + 1,
        data
    }
    if (examples.push(newExample)) return res.json(newExample)
    else return res.status(500).json({details: "No se pudo realizar la inserción"})
    
}

module.exports = {
    returnAllExamples,
    returnOneExample,
    addNewExample
}