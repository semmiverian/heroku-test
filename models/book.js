'use strict'
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define(
    'Book',
    {
      title: {type: DataTypes.STRING, validate: {isAlphanumeric: {msg: 'Title is Required'}}},
      description: { type: DataTypes.STRING, validate: { isAlphanumeric: { msg: 'Description is Required' }}},
      author: { type: DataTypes.STRING, validate: { isAlphanumeric: { msg: 'Author is Required' }}},
      availableToBorrow: DataTypes.BOOLEAN
    },
    {}
  )
  Book.associate = function(models) {
    // associations can be defined here
  }
  return Book
}
