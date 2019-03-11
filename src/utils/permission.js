function hasPermission(str, req) {
  return req.user.permissions.includes(str);
}

module.exports = hasPermission;