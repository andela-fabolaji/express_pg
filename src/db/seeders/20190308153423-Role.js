const { permissions } = require('../../utils/seeder');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('roles', [{
     title: 'admin',
     permissions: permissions['admin'],
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'caterer',
     permissions: permissions['caterer'],
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
    title: 'regular',
    permissions: permissions['regular'],
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('roles', null, {});
  }
};