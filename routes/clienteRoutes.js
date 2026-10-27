const express = require('express');
const Cliente = require('../models/Cliente');

const router = express.Router();

router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar clientes' });
  }
});

module.exports = router;