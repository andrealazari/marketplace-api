const express = require('express');
const router = express.Router()

// models
const Product = require('../models/product.js');

router.post('/', (req, res) => {
  console.log(req.body)

  const {name, image, price, description} = req.body

  Product.create(name, image, price, description).then((product) => res.json(product));
})

module.exports = router