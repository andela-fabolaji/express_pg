const express = require('express');
const User = require('./controllers/user');
const Auth = require('./controllers/auth');
const Role = require('./controllers/role');
const Meal = require('./controllers/meal');
const Menu = require('./controllers/menu');
const Order = require('./controllers/order');
const verifyAuth = require('./middleware/verifyAuth');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome! Api is active' });
});

// roles
router.get('/roles', Role.all);

// Auth
router.post('/signup', User.create);
router.post('/login', Auth.login);

// Meal
router.post('/meals', verifyAuth, Meal.create);

//menu
router.get('/menu', Menu.all);

// order
router.post('/orders', verifyAuth, Order.create)

router.all('*', (req, res) => {
  res.status(404).json({ message: 'The requested route does not exist.' });
});

module.exports = router;