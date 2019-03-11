const { User } = require('../db/models');
const { completeAuth } = require('../utils/tokens');

class UserController {
  static async create(req, res) {
    try {
      let user = await User.create(req.body);
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