const express = require('express')
const app = express()
const port = process.env.PORT || 3002

app.listen(port, () => console.log(`server listening on port: ${port}`))

//puts the JSON data into req.body
app.use(express.json())

//middlewares
const logger = require('./middlewares/logger');

//controllers
const productsController = require('./controllers/products_controller')

app.use(logger);

app.use('/api/products', productsController)








if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


//database


//routes
// app.get('/burgerLayers', (req, res) => res.json({burgerLayers}))

// app.post('/burgerLayers', (req, res) => {
//   burgerLayers = req.body.burgerLayers
//   res.json({burgerLayers})
// })