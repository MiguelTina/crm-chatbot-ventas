const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  nombre:    { type: String, required: true },
  email:     { type: String, required: false }, // ahora lo acepta, pero no es obligatorio
  telefono:  { type: String, required: true },
  producto:  { type: String, required: true },
  monto:     { type: Number, required: false },
  estado:    { type: String, required: false, default: 'pendiente' },
  creadoEn:  { type: Date,   default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
