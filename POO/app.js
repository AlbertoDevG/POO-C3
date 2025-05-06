const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./services/database'); // Conexión a MongoDB

const Usuario = require('./models/usuarios');
const Envio = require('./models/envios');

const app = express();
app.use(express.json());

// Paquetes disponibles.
const paquetes = {
    paquete30: { credito: 30 },
    paquete40: { credito: 40 },
    paquete60: { credito: 60 }
};

// Creación de nuevos usuarios.
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, paquete } = req.body;

    if (!paquetes[paquete]) {
      return res.status(400).json({ error: 'Paquete inválido.' });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      paquete,
      credito: paquetes[paquete].credito
    });

    await nuevoUsuario.save();
    res.json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Muestra todos los usuarios.
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find(); 
    res.json(usuarios); 
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

// Ver los créditos de un usuario.
app.get('/usuarios/:id/credito', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no registrado, por favor verifique el id.' });
  res.json({ nombre: usuario.nombre, credito: usuario.credito });
});

// Nuevos envíos.
app.post('/envios', async (req, res) => {
  try {
    const {
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion,
      producto
    } = req.body;

    const usuario = await Usuario.findById(usuario_id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no registrado, por favor verifique el id.' });

    if (usuario.credito <= 0) return res.status(400).json({ error: 'El usuario no tiene crédito.' });

    // Calcular los créditos a descontar según el peso del producto.
    const creditosConsumidos = Math.ceil(producto.peso / 3);
    if (usuario.credito < creditosConsumidos) {
      return res.status(400).json({ error: 'Crédito insuficiente para este envío.' });
    }

    // Calculando el valor del envío según su peso.
    const precios = { paquete30: 135, paquete40: 160, paquete60: 180 };
    const precioBase = precios[usuario.paquete] / paquetes[usuario.paquete].credito;
    const precio_envio = precioBase * creditosConsumidos; 

    producto.precio_envio = precio_envio;

    // Crear el envío
    const nuevoEnvio = new Envio({
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion,
      producto,
      creditos_usados: creditosConsumidos
    });

    await nuevoEnvio.save();

    // Descontar los créditos del usuario
    usuario.credito -= creditosConsumidos;
    await usuario.save();

    res.json(nuevoEnvio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ver todos los envíos de un usuario.
app.get('/envios/:usuario_id', async (req, res) => {
  const envios = await Envio.find({ usuario_id: req.params.usuario_id });
  res.json(envios);
});

// Eliminar envíos y devolver crédito.
app.delete('/envios/:id', async (req, res) => {
  const envio = await Envio.findById(req.params.id);
  if (!envio) return res.status(404).json({ error: 'El envío no está registrado.' });

  const usuario = await Usuario.findById(envio.usuario_id);
  if (usuario) {
    usuario.credito += envio.creditos_usados;
    await usuario.save();
  }

  await envio.deleteOne();
  res.json({ mensaje: `Envío eliminado correctamente, ${envio.creditos_usados} créditos reembolsados.` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo exitosamente`));


