const db = require('../db/db');

const Sale = {
  
  delete: (itemId) => {
    const sql = `
      DELETE FROM products WHERE id = $1;
    `;
    return db.query(sql, [itemId]);
  },

  deleteCart: (itemId) => {
    const sql = `
      DELETE FROM carts WHERE item_id = $1
    `;
    return db.query(sql, [itemId]);
  },
};

module.exports = Sale;