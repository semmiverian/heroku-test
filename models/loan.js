'use strict'
module.exports = (sequelize, DataTypes) => {
  var Loan = sequelize.define(
    'Loan',
    {
      borrowerName: { type: DataTypes.STRING, validate: { isAlphanumeric: { msg: 'Borrower name is Required' } } },
      borrowerGender: { type: DataTypes.STRING, validate: { isAlphanumeric: { msg: 'Borrower gender is Required' } } },
      dueDate: DataTypes.DATE,
      returned: DataTypes.BOOLEAN,
      bookId: {
        type: DataTypes.INTEGER,
        validate: {isNumeric: {msg: 'Book Id Required'}}
      }
    },
    {
      hooks: {
        beforeCreate(loan) {
          let date = new Date()
          date.setDate(date.getDate() + 2)
          loan.dueDate = date
        }
      }
    }
  )
  Loan.associate = function(models) {
    // associations can be defined here
  }

  Loan.returnBook = function(id) {
    return Loan.update(
      {
        returned: true
      },
      {
        where: {
          id
        }
      }
    )
  }
  return Loan
}
