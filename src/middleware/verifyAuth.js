const { decode } = require('../utils/tokens');

function verifyAuth(req, res, next) {
  const user = decode(req.headers['authorization']);
  if (!user) res.status(403).json({ msg: 'User not authenticated' });
  req.user = user;
  next();
}

module.exports = verifyAuth;