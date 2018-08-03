const express = require('express')
const routes = express.Router()
const {Book} = require('./../models')

routes.get('/', (req, res) => {
  res.locals.error = req.query.err ? JSON.parse(req.query.err) : null
  Book.findAll({
    order: [['createdAt', 'DESC']]
  }).then(books => {
    res.render('book/index', {books})
  })
})

routes.post('/', (req, res) => {
  Book.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author
  })
    .then(book => {
      res.redirect('/books')
    })
    .catch(err => {
      let allErr = err.errors.map(err => err.message)

      res.redirect(`/books?err=${JSON.stringify(allErr)}`)
    })
})

routes.get('/:id/edit', (req, res) => {
  res.locals.error = JSON.parse(req.query.err)

  Book.findById(req.params.id).then(book => {
    res.render('book/edit', {book})
  })
})

routes.post('/:id/update', (req, res) => {
  Book.update(
    {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(_ => {
      res.redirect('/books')
    })
    .catch(err => {
      let allErr = err.errors.map(err => err.message)

      res.redirect(`/books/${req.params.id}/edit?err=${JSON.stringify(allErr)}`)
    })
})

routes.get('/:id/delete', (req, res) => {
  Book.destroy(req.params.id).then(_ => {
    res.redirect('/books')
  })
})

module.exports = routes
