const db = require('../db/db');

const Purchase = {
  create: (purchasesArray) => {
    let sqlQueryArray = []

    purchasesArray.forEach(purchase => {
      let {item, price,  item_id, image, description, userid} = purchase
      sqlQueryArray.push(item)
      sqlQueryArray.push(price)
      sqlQueryArray.push(item_id)
      sqlQueryArray.push(image)
      sqlQueryArray.push(description)
      sqlQueryArray.push(userid)
    })

    let itemsArray= []
    let count = 1
    for( let i = 0; i < purchasesArray.length; i++) {
      itemsArray.push(`($${count}, $${count + 1}, $${count + 2}, $${count + 3}, $${count + 4}, $${count + 5})`)
      count = count + 6
    }   
    console.log(purchasesArray)
    console.log(itemsArray)

    const sql = `
      INSERT INTO purchases (item, price, item_id,  image, description, userid)
      VALUES 
        ${itemsArray.join(', ')}
      RETURNING *
    `

    return db
      .query(sql, sqlQueryArray)
      .then((dbRes) => 
        dbRes.rows
    );
  },

  findAll: () => {
    const sql = `
    SELECT * FROM purchases
    `
    return db.query(sql).then((dbRes) => dbRes.rows);
  }
};

module.exports = Purchase;