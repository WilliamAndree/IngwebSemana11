const express = require('express');
const mongoose = require('mongoose');

const Venta = require('../models/Venta');
const DetalleVenta = require('../models/DetalleVenta');

const router = express.Router();

// Consultar todas las ventas
router.get('/ventas', async (req, res) => {
  try {
    const ventas = await Venta.find()
      .populate('cliente_id', 'nombre documento');

    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar ventas' });
  }
});

// Consultar una venta y sus productos
router.get('/ventas/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ mensaje: 'ID inválido' });
    }

    const venta = await Venta.findById(req.params.id)
      .populate('cliente_id', 'nombre documento');

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    const detalles = await DetalleVenta.find({
      venta_id: venta._id
    }).populate('producto_id', 'nombre');

    res.json({ venta, detalles });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar venta' });
  }
});

module.exports = router;