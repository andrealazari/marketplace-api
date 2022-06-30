const express = require('express');
const router = express.Router()

// models
const Cart = require('../models/cart.js');

router.post('/', (req, res) => {
  const {item, price, item_id, image, description} = req.body

  Cart.create(item, price, item_id, image, description).then((product) => res.json(product));
})

router.get('/', (req, res) => {
  Cart.findAll().then((products) => res.json(products));
});

module.exports = router