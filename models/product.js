const db = require('../db/db');

const Product = {
  create: (name, image, price, description) => {
    const sql = `
      INSERT INTO products(name, image, price, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    return db
      .query(sql, [name, image, price, description])
      .then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Product;
