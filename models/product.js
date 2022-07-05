const db = require('../db/db');

const Product = {
  create: (item, image, price, description, userid, avatar, userName) => {
    const sql = `
      INSERT INTO products(item, image, price, description, userid, avatar, username)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `
    return db
      .query(sql, [item, image, price, description, userid, avatar, userName])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAll: () => {
    const sql = `
    SELECT * FROM products
    `
    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  delete: (itemId) => {
    const sql = `
      DELETE FROM products WHERE id = $1
    `;
    return db.query(sql, [itemId]);
  },

  findAllByNotId: (user_id) => {
    const sql = `
    SELECT * FROM products WHERE id != userid
    `
    return db.query(sql[user_id]).then((dbRes) => dbRes.rows);
  },

  findAllByNotId: (user_id) => {
    const sql = `
    SELECT * FROM products WHERE id = userid
    `
    return db.query(sql[user_id]).then((dbRes) => dbRes.rows);
  },
};

module.exports = Product;
