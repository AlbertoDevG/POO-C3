const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> res.send('¡¡Saludos es mi primer server!!'))
app.listen(port, ()=>
    console.log(`Servidor corriendo en puerto ${port}! para cerrarlo preciona Ctrl + C`)
)