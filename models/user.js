const db = require('../db/db');

const User = {
  create: (avatar, name, email,  password) => {
    const sql = `
      INSERT INTO users(avatar, name, email,  password_digest) VALUES($1, $2, $3, $4)
      RETURNING *
    `;

    return db
      .query(sql, [avatar, name, email,  password])
      .then((dbRes) => dbRes.rows[0].name);
  },

  findByEmail: (email) => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `;

    return db.query(sql, [email]).then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = User;