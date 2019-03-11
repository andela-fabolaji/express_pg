const { hash } = require('../../utils/bcrypt');
const { generateUsers } = require('../../utils/seeder');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users', [{
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@app.com',
    password: hash('password'),
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, ...generateUsers(5)], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
  }
};