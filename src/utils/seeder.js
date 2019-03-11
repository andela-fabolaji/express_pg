const { hash } = require('./bcrypt');
const faker = require('faker');

const permissions = {
  admin: [
    'create_meal',
    'update_meal',
    'delete_meal',
    'create_user',
    'update_user',
    'delete_user',
    'disable_user',
    'create_order',
    'update_order',
    'delete_order'
  ],
  caterer: [
    'create_meal',
    'update_meal',
    'delete_meal',
  ],
  regular: [
    'create_order',
    'update_order',
    'delete_order'
  ]
}

function generateUsers(num = 2) {
  return Array(num).fill({}).map(_ => {
    const firstName = faker.name.firstName().toLowerCase();
    const lastName = faker.name.lastName().toLowerCase();
    const email = `${firstName}.${lastName}@fakemail.com`;

    return {
      firstName,
      lastName,
      email,
      password: hash('password'),
      roleId: Math.floor(Math.random() * ((2-1) + 1) + 2),
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });
}

module.exports = {
  generateUsers,
  permissions
};