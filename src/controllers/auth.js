const { User } = require('../db/models/index');
const { hash, compare } = require('../utils/bcrypt');
const { completeAuth } = require('../utils/tokens');

class AuthController {
  static async login(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
        attributes: { exclude: ['password'] }
      });
      let statusCode = 200;
      let response = {
        msg: 'login successful.'
      };

      if (!user) {
        statusCode = 404;
        response.msg = 'User not found';
      } else {
        response.data = completeAuth(user);
      }

      res.status(statusCode).json(response);
    } catch(e) {
      res.status(500).json({
        msg: 'Unable to login',
        error: e
      });
    }
  }
}

module.exports = AuthController;
