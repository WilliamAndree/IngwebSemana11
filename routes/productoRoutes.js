const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar productos' });
  }
});

module.exports = router;