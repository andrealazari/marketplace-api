const express = require('express');
const router = express.Router()

// models
const Product = require('../models/product.js');


router.post('/', (req, res) => {
  const {item, image, price, description, userid, avatar, userName} = req.body

  Product.create(item, image, price, description, userid, avatar, userName).then((product) => res.json(product));
})

router.get('/', (req, res) => {

  Product.findAll().then((products) => res.json(products));
  
});

module.exports = router