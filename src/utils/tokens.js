const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const sign = (userPayload) => {
  const { id, email, Role: role } = userPayload;
  return jwt.sign({
    id,
    email,
    roleId: role.id,
    permissions: role.permissions
  }, SECRET, { expiresIn: '24h' });
};

const completeAuth = (user) => {
  return {
    user,
    token: sign(user)
  };
};

const decode = token => {
  try {
    return jwt.verify(token, SECRET);
  } catch(e) {
    throw new Error('Invalid token');
  }
};

module.exports = { completeAuth, decode };