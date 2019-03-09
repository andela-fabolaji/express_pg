const { hash } = require('../../utils/bcrypt');
const faker = require('faker');

function fakeUsers(num) {
  return Array(num).fill({}).map(_ => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = `${firstName}.${lastName}@fakemail.com`;

    return {
      firstName,
      lastName,
      email,
      password: hash('password'),
      role: 'caterer',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });
}

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
   }, ...fakeUsers(5)], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
  }
};

