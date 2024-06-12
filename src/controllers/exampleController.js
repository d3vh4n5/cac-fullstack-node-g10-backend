const exampleResponseHandler = (req, res) => {
    // Some code, go to DB, whatever..
    res.json({msg: "Esto es un ejemplo"})
}

module.exports = {
    exampleResponseHandler,
}