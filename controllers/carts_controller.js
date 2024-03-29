const express = require('express');
const router = express.Router()

// models
const Cart = require('../models/cart.js');

router.post('/', (req, res) => {
  const {item, price, item_id, image, description, userid} = req.body

  Cart.create(item, price, item_id, image, description, userid).then((product) => res.json(product));
})

router.get('/', (req, res) => {
  Cart.findAll().then((products) => res.json(products));
});

router.delete('/:id', (req, res) => {
  const itemId = req.params.id;

  Cart.delete(itemId).then(() => res.json({ message: 'delete successfully' }));
});

module.exports = router