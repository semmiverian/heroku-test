'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Books', [
      {
        title: "You Don't know JS",
        description: 'All About Javascript',
        author: 'Kyle Simpsons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "You know JS",
        description: 'All About Javascript',
        author: 'Kyle Simpsons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Eloquent Javascript",
        description: 'All About Javascript',
        author: 'Lupa siapa yang bikin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
