const { hash } = require('../../utils/bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users', [{
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@app.com',
    password: hash('password'),
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
  }
};
