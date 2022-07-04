const express = require('express');
const router = express.Router()

// models
const Sale = require('../models/sale.js');
const Cart = require('../models/cart.js');

router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(itemId)

  Sale.delete(itemId).then(() => res.json({ message: 'delete successfully' }));
});


module.exports = router