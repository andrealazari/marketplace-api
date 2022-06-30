const db = require('../db/db');

const Product = {
  create: (item, image, price, description) => {
    const sql = `
      INSERT INTO products(item, image, price, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `
    return db
      .query(sql, [item, image, price, description])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAll: () => {
    const sql = `
    SELECT * FROM products
    `
    return db.query(sql).then((dbRes) => dbRes.rows);
  }
};

module.exports = Product;
