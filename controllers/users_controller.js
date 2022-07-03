const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');

// models
const User = require('../models/user.js');

router.post('/', (req, res) => {
  const { avatar, name, email,  password}  = req.body;
  const passwordDigest = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10),
    null
  );

  User.create(avatar, name, email,  passwordDigest)
    .then((user) => res.json(user));
});



module.exports = router