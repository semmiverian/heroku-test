const express = require('express')
const routes = express.Router()
const {Loan, Book} = require('./../models')

routes.get('/', (req, res) => {
  res.locals.error = req.query.err ? JSON.parse(req.query.err) : null
  Loan.findAll({include: [Book]}).then(loan => {
    res.render('loan/index', {loan})
  })
})

routes.get('/new', (req, res) => {
  Book.findAll({where: {availableToBorrow: true}, order: ['title']}).then(
    books => {
      res.render('loan/new', {books})
    }
  )
})

routes.post('/', (req, res) => {
  console.log('aaa')
  res.send(req.body)
  // Loan.create({
  //   borrowerName: req.body.name,
  //   borrowerGender: req.body.gender,
  //   bookId: req.body.bookId
  // })
})

routes.get('/:id/return', (req, res) => {
  Loan.returnBook(req.params.id).then(loan => {
    Book.update({availableToBorrow: true}, {where: {id: loan.id}}).then(_ => {
      res.redirect('/loans')
    })
  })
})

module.exports = routes
