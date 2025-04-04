const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI, {

})
.then(()=> console.log('Conexión exitosa a db'))
.catch(err => console.error('Error de configuración', err))

app.get('/', (req, res)=> res.send('¡¡Saludos es mi primer server!!'))
app.listen(port, ()=>
    console.log(`Servidor corriendo exitosamente`)
)