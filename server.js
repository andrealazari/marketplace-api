const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => console.log(`server listening on port: ${port}`))

//puts the JSON data into req.body
app.use(express.json())

//middlewares
const logger = require('./middlewares/logger');

//controllers
const productsController = require('./controllers/products_controller')
const cartsController = require('./controllers/carts_controller')
const purchasesController = require('./controllers/purchases_controller')
const editController = require('./controllers/edit_controller')

app.use(logger);

app.use('/api/products', productsController)
app.use('/api/cart', cartsController)
app.use('/api/purchases', purchasesController)
app.use('/api/edit', editController)







if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}