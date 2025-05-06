const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  paquete: { type: String, enum: ['paquete30', 'paquete40', 'paquete60'], required: true },
  credito: { type: Number, required: true }, 
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
