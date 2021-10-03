const mongoose = require('mongoose');
const { Schema } = mongoose;

const Producto = new Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    Descripcion: String,
    Categoria: String,
    Genero: String,
    Temporada: String
});

module.exports = mongoose.model('Producto', Producto);