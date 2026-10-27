const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  fecha: { type: Date, default: Date.now },
  total: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Venta', VentaSchema, 'ventas');