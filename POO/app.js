const express = require('express')
const app = express()

require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res)=> res.send('¡¡Saludos es mi primer server!!'))
app.listen(port, ()=>
    console.log(`Servidor corriendo exitosamente`)
)