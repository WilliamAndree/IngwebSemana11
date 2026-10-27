const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  documento: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema, 'clientes');  