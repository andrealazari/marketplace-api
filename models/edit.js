const db = require('../db/db');

const Edit = {
  changeDetails: (item, price, description, id) => {
    const sql = `
      UPDATE products
      SET item = $1, price = $2, description = $3
      WHERE id = $4
      RETURNING *
    `;
    return db
      .query(sql, [item, price, description, id])
      .then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Edit;