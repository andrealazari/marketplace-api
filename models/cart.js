const db = require('../db/db');

const Cart = {
  create: (item, price, item_id, image, description) => {
    const sql = `
      INSERT INTO carts(item, price, item_id, image, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `
    return db
      .query(sql, [item, price, item_id, image, description])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAll: () => {
    const sql = `
    SELECT * FROM carts
    `
    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  delete: (itemId) => {
    const sql = `
      DELETE FROM carts WHERE id = $1
    `;
    return db.query(sql, [itemId]);
  },
};

module.exports = Cart;