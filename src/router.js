const express = require('express');
const User = require('./controllers/user');
const Auth = require('./controllers/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome! Api is active' });
});

// Auth
router.post('/signup', User.create);
router.post('/login', Auth.login);

// User
// router.route('/users', verifyAuth, verifyAdmin, User.all);

// Meal
// router.route('/meals', verifyAuth, Meal.create);

router.all('*', (req, res) => {
  res.status(404).json({ message: 'The requested route does not exist.' });
});

module.exports = router;