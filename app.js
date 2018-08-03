const express = require('express')
const books = require('./routes/books')
const loans = require('./routes/loans')
const app = express()
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/books', books)
app.use('/loans', loans)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('App listening on port' + port)
})

