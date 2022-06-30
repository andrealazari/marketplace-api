const db = require('../db/db');

const Purchase = {
  create: (item, price, item_id,  image, description) => {
    const sql = `
      INSERT INTO purchases(item, price, item_id,  image, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `
    return db
      .query(sql, [item, price, item_id, image, description])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAll: () => {
    const sql = `
    SELECT * FROM purchases
    `
    return db.query(sql).then((dbRes) => dbRes.rows);
  }
};

module.exports = Purchase;