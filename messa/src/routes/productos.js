const express = require('express');
const router = express.Router();

const Product = require('../models/Producto');

router.get('/', async (req, res) => {
    const productos = await Product.find();
    res.json(productos);
});

module.exports = router;