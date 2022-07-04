const db = require('../db/db');

const Purchase = {
  create: (purchasesArray) => {
    let sqlQueryArray = []

    purchasesArray.forEach(purchase => {
      let {item, price, item_id, image, description} = purchase
      sqlQueryArray.push(item,price,item_id,image,description)
    })


    let itemsArray= []
    let count = 1
    for( let i = 0; i < purchasesArray.length; i++) {
      itemsArray.push(`($${count}, $${count + 1}, $${count + 2}, $${count + 3}, $${count + 4})`)
      count = count + 5
    }   


    const sql = `
      INSERT INTO "purchases" ("item", "price", "item_id",  "image", "description")
      VALUES 
        ${itemsArray.join(', ')}
      RETURNING *
    `
    return db
      .query(sql, sqlQueryArray)
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