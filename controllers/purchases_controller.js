const express = require('express');
const router = express.Router()

// models
const Purchase = require('../models/purchase.js');

router.post('/', (req, res) => {
  const {item, price, item_id, image, description} = req.body

  Purchase.create(item, price, item_id, image, description).then((product) => res.json(product));
})

router.get('/', (req, res) => {
  Purchase.findAll().then((products) => res.json(products));
});

module.exports = router