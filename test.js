const testArray = [
  {
    id: 1,
    item: '11',
    price: '11',
    item_id: '11',
    image: '11',
    description: '11'
  },
  {
    id: 2,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 3,
    item: '2',
    price: '2',
    item_id: '5',
    image: '2',
    description: '2'
  },
  {
    id: 4,
    item: 'item',
    price: '4',
    item_id: '3',
    image: 'item',
    description: 'item'
  },
  {
    id: 5,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 6,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 7,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 8,
    item: '2',
    price: '2',
    item_id: '5',
    image: '2',
    description: '2'
  },
  {
    id: 9,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 10,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  },
  {
    id: 11,
    item: 'guitar',
    price: '300',
    item_id: '4',
    image: 'guitar.img',
    description: 'black'
  }
]

// const create = (array) => {
//   let sqlQueryArray = []

//   array.forEach(purchase => {
//     let arr= []
//     let {item, price, item_id, image, description} = purchase
//     arr.push(item,price,item_id,image,description)
//     sqlQueryArray.push(arr)
//   })

//   return sqlQueryArray
// }

let sqlArray= []
let count = 1
for( let i = 0; i < testArray.length; i++) {
  sqlArray.push(`($${count}, $${count + 1}, $${count + 2}, $${count + 3}, $${count + 4})`)
  count = count + 5
}


console.log(sqlArray.join(', '))
// console.log(sqlArray.join(', '))

// console.log(create(testArray))




// create: (purchasesArray) => {
//   let sqlQueryArray = []
//   let sqlArray =[]

//   purchasesArray.forEach(purchase => {
//     let {item, price, item_id, image, description} = purchase
//     sqlQueryArray.push(`(${item},${price},${item_id},${image},${description})`)
//   })

//   purchasesArray.forEach((purchase, i) => {
//     sqlArray.push(`$${i+1}`)
//   })

//   console.log( sqlQueryArray)
//   console.log(sqlArray.join(', '))

//   const sql = `
//     INSERT INTO purchases(item, price, item_id,  image, description)
//     VALUES 
//       ($1)
//     RETURNING *
//   `
//   return db
//     .query(sql, ['item','4','3','item', 'item'])
//     .then((dbRes) => dbRes.rows[0]);
// },