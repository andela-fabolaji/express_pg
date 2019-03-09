const { hash } = require('../../utils/bcrypt');
const faker = require('faker');

function fakeUsers(num) {
  const users = [];
  for (let i = 0; i < num; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = `${firstName}.${lastName}@fakemail.com`;
    
    users.push({
      firstName,
      lastName,
      email,
      password: hash('password'),
      role: 'caterer',
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return users;
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
   }, ...fakeUsers(10)], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
  }
};

