const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const dotenv = require('dotenv').config()

app.listen(port, () => console.log(`server listening on port: ${port}`))

//puts the JSON data into req.body
app.use(express.json())

//middlewares
const logger = require('./middlewares/logger');
const sessions = require('./middlewares/sessions');

//controllers
const productsController = require('./controllers/products_controller')
const cartsController = require('./controllers/carts_controller')
const purchasesController = require('./controllers/purchases_controller')
const editController = require('./controllers/edit_controller')
const salesController = require('./controllers/sales_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

app.use(logger);
app.use(sessions);


app.use('/api/products', productsController)
app.use('/api/cart', cartsController)
app.use('/api/purchases', purchasesController)
app.use('/api/edit', editController)
app.use('/api/sales', salesController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)







if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}