const express = require('express');
const router = express.Router()

// models
const Edit = require('../models/edit.js');

router.put('/', (req, res) => {
  const {item, price, description, id} = req.body

  Edit.changeDetails(item, price, description, id).then((product) =>
    res.json(product)
  )
});

module.exports = router