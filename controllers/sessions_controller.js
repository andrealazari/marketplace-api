const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//models
const User = require('../models/user');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email).then((user) => {
    if (user === undefined || password === undefined) {
      res.json({ error: 'Please provide correct login information' });
    } else {
      const isValidPassword = bcrypt.compareSync(
        password,
        user.password_digest
      );
      if (user && isValidPassword) {
        req.session.userId = user.id;
        res.json({
          userId: user.id,
          userName: user.name,
          avatar: user.avatar,
          email: user.email,
        });
      }
    }
  });
});

router.delete('/', (req, res) => {
  req.session.userId = undefined;
  res.json({ message: 'logout successfully' });
});

module.exports = router;