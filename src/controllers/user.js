const { User } = require('../db/models');
const { hash } = require('../utils/bcrypt');
const { completeAuth } = require('../utils/tokens');

class UserController {
  static async create(req, res) {
    const payload = {
      ...req.body,
      password: hash(req.body.password)
    };
    try {
      let user = await User.create(payload);
      user = user.get({ plain: true });
      delete user.password;
      
      res.status(201).json({
        data: completeAuth(user)
      });
    } catch(e) {
      res.status(500).json({
        msg: 'Unable to sign up.',
        error: e
      });
    }
  }
}

module.exports = UserController;