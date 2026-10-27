const mongoose = require('mongoose');

const DetalleVentaSchema = new mongoose.Schema({
  venta_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venta',
    required: true
  },
  producto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  cantidad: { type: Number, required: true, min: 1 },
  precio_unitario: { type: Number, required: true, min: 0 },
  subtotal: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model(
  'DetalleVenta',
  DetalleVentaSchema,
  'detalle_ventas'
);