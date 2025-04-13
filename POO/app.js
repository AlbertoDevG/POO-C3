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

app.get('/series/:id', async (req, res) => {
  try {
    const serie = await series.findById(req.params.id);
    if (!serie) {
      return res.status(404).json({ error: 'Serie no encontrada' });
    }
    res.json(serie);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la serie' });
  }
});

app.post('/series', async (req, res) => {
  try {
    const { name, capitulos } = req.body;
    if (!name || !capitulos) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const nuevaSerie = new series({
      name,
      capitulos
    });
    const serieGuardada = await nuevaSerie.save();
    res.status(201).json(serieGuardada);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la serie' });
  }
});


app.put('/series/:id', async (req, res) => {
  try {
    const { name, capitulos } = req.body;
    if (!name || !capitulos) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const serieActualizada = await series.findByIdAndUpdate(
      req.params.id,
      { name, capitulos },
      { new: true }
    );
    if (!serieActualizada) {
      return res.status(404).json({ error: 'Serie no encontrada' });
    }
    res.json(serieActualizada);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la serie' });
  }
});

app.delete('/series/:id', async (req, res) => {
  try {
    const serieEliminada = await series.findByIdAndDelete(req.params.id);
    if (!serieEliminada) {
      return res.status(404).json({ error: 'Serie no encontrada' });
    }
    res.json({ message: 'Serie eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la serie' });
  }
});


app.listen(port, ()=>
    console.log(`Servidor corriendo exitosamente`)
)