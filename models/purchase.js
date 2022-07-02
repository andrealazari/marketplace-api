const db = require('../db/db');

const Purchase = {
  create: (purchasesArray) => {
    let sqlQueryArray = []
    let sqlArray =[]

    purchasesArray.forEach(purchase => {
      // let arr= []
      let {item, price, item_id, image, description} = purchase
      sqlQueryArray.push(item,price,item_id,image,description)
    })



    // [...[item, pric],...[item,] ]

    let itemsArray= []
    let count = 1
    for( let i = 0; i < purchasesArray.length; i++) {
      itemsArray.push(`($${count}, $${count + 1}, $${count + 2}, $${count + 3}, $${count + 4})`)
      count = count + 5
    }   
    

    console.log( sqlQueryArray)
    console.log(itemsArray.join(', '))

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