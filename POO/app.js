const express = require('express')
const Series = require('./models/series');
const series = require('./models/series');
require ('./services/database') //requerimiento del servicio de db
const app = express()

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json())

app.get('/series', async (req, res) => {
  try {
    const serie = await series.find()
    res.json(serie)

  } catch (err) {
    res.status(500).json({error: 'Error al obtener las series'})
  }
})



app.listen(port, ()=>
    console.log(`Servidor corriendo exitosamente`)
)